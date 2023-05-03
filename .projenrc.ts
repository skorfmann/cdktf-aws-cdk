import { CdktfAwsCdkProject } from "./projen";

const project = new CdktfAwsCdkProject({
  terraformProvider: "aws@~> 4.0",
  cdktfVersion: "0.15.0",
  constructsVersion: "^10.0.25",
  minNodeVersion: "14.17.0",
  projenrcTs: true,
  devDeps: ["cfn-types@^0.2.0"],
});

project.package.addPackageResolutions("@types/babel__traverse@7.18.2");
project.synth();
