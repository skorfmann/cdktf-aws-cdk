import * as fs from 'fs'
import * as path from 'path'
import supported from '../src/awscc/supportedTypes'

interface Mapping {
  resource: string;
  org: string;
  service: string;
  fqn: string;
  refAttribute: string;
  attributes: string[];
}

const mapperTemplate = (mappings: Mapping) => {
  const { fqn, refAttribute, attributes } = mappings

  return `
    import { cloudcontrolapiResource } from "../../../../aws";
    import { Construct } from "constructs";
    import { Fn, propertyAccess } from "cdktf";
    import { registerMapping } from "../../../index";

    registerMapping("${fqn}", {
      resource: (scope: Construct, id: string, props: any) => {

        const clonedProps = {...props}

        // delete props we successfully mapped to mark them as handled
        Object.keys(props).forEach((key) => delete (props as any)[key]);

        return new cloudcontrolapiResource.CloudcontrolapiResource(scope, id, {
          typeName: "${fqn}",
          desiredState: JSON.stringify(clonedProps),
        });
      },
      attributes: {
        Ref: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["${refAttribute}"]),
        ${attributes.map(attribute => `${attribute}: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["${attribute}"]),`).join('\n')}
      },
    })
  `
}


(async () => {
  const schemasDir = path.join(__dirname, '..', 'node_modules', 'cfn-types', 'cfn-json-schema');
  const schemaFiles = fs.readdirSync(schemasDir);

  // iterate asynchronously over all schemas
  for (const schema of schemaFiles) {
    const [name, ] = schema.split('.');
    const [org, service, resource] = name.split('-');

    const schemaBody = fs.readFileSync(path.join(schemasDir, schema), 'utf8')
    const schemaJson = JSON.parse(schemaBody)
    // check if the resource is supported
    if (!supported.has(schemaJson.typeName)) {
      continue;
    }

    // check if the directory exists
    const baseDir = path.join(__dirname, '..', 'src', 'mapping', 'awscc', org, service);
    if (!fs.existsSync(baseDir)) {
      fs.mkdirSync(baseDir, { recursive: true })
    }

    const attributes = Object.keys(schemaJson.properties) || []
    // const attributes = (schemaJson.readOnlyProperties || []).map((p: string) => p.split('/').pop())
    // const readOnlyProperties: string[] = (schemaJson.readOnlyProperties || []).map((p: string) => p.split('/').pop())
    // const createProperties = attributes.filter((p: string) => !readOnlyProperties.includes(p))
    const refAttribute = schemaJson.primaryIdentifier[0].split('/').pop()
    const typeName = schemaJson.typeName

    // remove duplicates from readOnlyProperties
    // const attributes: string[] = [...new Set(readOnlyProperties)]

    const ts = mapperTemplate({
      resource,
      org,
      service,
      fqn: typeName,
      refAttribute,
      attributes,
    })

    // write the file
    fs.writeFileSync(path.join(baseDir, `${resource}.ts`), ts)
  }

  const baseDir = path.join(__dirname, '..', 'src', 'mapping', 'awscc', 'aws');

  // write index.ts in the service directories
  const serviceDirs = fs.readdirSync(baseDir);
  // remove index.ts from the list
  const indexFile = serviceDirs.indexOf('index.ts')
  if (indexFile > -1) {
    serviceDirs.splice(indexFile, 1)
  }

  for (const serviceDir of serviceDirs) {
    const serviceFiles = fs.readdirSync(path.join(baseDir, serviceDir));
    // remove index.ts from the list
    const indexFile = serviceFiles.indexOf('index.ts')
    if (indexFile > -1) {
      serviceFiles.splice(indexFile, 1)
    }
    const index = serviceFiles.map((f) => `import './${path.basename(f, '.ts')}';`).join('\n');
    fs.writeFileSync(path.join(baseDir, serviceDir, 'index.ts'), index)
  }

  // write index.ts in the aws directory
  fs.writeFileSync(path.join(baseDir, 'index.ts'), serviceDirs.map((s) => `import './${s}';`).join('\n'))
})()
