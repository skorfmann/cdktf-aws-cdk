import { CdktfAwsCdkProject } from "./projen";

const project = new CdktfAwsCdkProject({
  terraformProvider: "aws@~> 4.0",
  cdktfVersion: "0.15.0",
  constructsVersion: "^10.0.25",
  minNodeVersion: "14.17.0",
  projenrcTs: true,
  deps: ["glob@^9.2.1"],
  devDeps: ["@types/glob@^8.1.0", "cfn-types@^0.2.0"],
});

project.package.addPackageResolutions("@types/babel__traverse@7.18.2");
project.synth();
