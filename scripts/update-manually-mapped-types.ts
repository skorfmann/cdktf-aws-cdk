import * as fs from 'fs'
import * as path from 'path'

const manuallyMapped = new Set<string>();

(async () => {
  const dir = path.join(__dirname, '..', 'src', 'mapping', 'manual');
  const manualFiles = fs.readdirSync(dir);

  for (const schemaFile of manualFiles) {
    const mapped = fs.readFileSync(path.join(dir, schemaFile), 'utf8');
    // parse the type name with a regex matching 'registerMapping("AWS::SQS::QueuePolicy"'
    // there can be multiple matches, we want to capture all of them
    // don't match the closing quote, so we can slice it off later
    const matches = mapped.match(/registerMapping\("([a-zA-Z:]*)(?=")/g);
    if (matches) {
      for (const match of matches) {
        const typeName = match.slice('registerMapping("'.length);
        manuallyMapped.add(typeName);
      }
    }
  }

  // log the manually mapped types
  console.log(Array.from(manuallyMapped).sort().join('\n'));
  // log the number of manually mapped types
  console.log(`Total: ${manuallyMapped.size}`);

  const content = `// generated - this file is generated and can be updated by running the fetch:types script
export default new Set(${JSON.stringify(Array.from(manuallyMapped), null, 2)});
`;
  fs.writeFileSync(path.join(__dirname, '..', 'src', 'awscc', 'manuallyMappedTypes.ts'), content);
})();

