import supported from '../src/awscc/supportedTypes'
import * as fs from 'fs'
import * as path from 'path'

const unsupportedTypes = new Set<string>();
const allTypes = new Set<string>();

(async () => {
  const schemasDir = path.join(__dirname, '..', 'node_modules', 'cfn-types', 'cfn-json-schema');
  const schemaFiles = fs.readdirSync(schemasDir);

  for (const schemaFile of schemaFiles) {
    const json = JSON.parse(fs.readFileSync(path.join(schemasDir, schemaFile), 'utf8'));
    const typeName = json.typeName;
    allTypes.add(typeName);
    if (supported.has(typeName)) {
      continue;
    } else {
      unsupportedTypes.add(typeName);
    }
  }

  // log the unsupported types
  console.log(Array.from(unsupportedTypes).sort().join('\n'));
  // log the number of unsupported types
  console.log(`Total: ${unsupportedTypes.size}`);

  const content = `// generated - this file is generated and can be updated by running the fetch:types script
export default new Set(${JSON.stringify(Array.from(unsupportedTypes), null, 2)});
`;

  fs.writeFileSync(path.join(__dirname, '..', 'src', 'awscc', 'unsupportedTypes.ts'), content);

  const unsupportedGrouped: Record<string, string[]> = {}

  for (const type of supported) {
    const uService = type.split('::')[1];
    if (!unsupportedGrouped[uService]) {
      unsupportedGrouped[uService] = []
    }
    unsupportedGrouped[uService].push(type)
  }

  const docContent = `
# Unsupported AWS CloudFormation Resources

The following AWS CloudFormation resources are not supported by the CloudControl API yet.

| Service | Resources |
| --- | --- |
${Object.keys(unsupportedGrouped).map(service => `| ${service} | ${unsupportedGrouped[service].join(', ')} |`).join('\n')}
`;

  fs.writeFileSync(path.join(__dirname, '..', 'docs', 'unsupported-resources.md'), docContent);


  // log the unsupportedGrouped types
  console.log(JSON.stringify(unsupportedGrouped, undefined, 2));

  // // log all types
  // console.log(Array.from(allTypes).sort().join('\n'));
})()

