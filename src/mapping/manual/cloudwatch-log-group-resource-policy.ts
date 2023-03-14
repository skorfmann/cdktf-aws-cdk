import { Construct } from "constructs";
import { cloudwatchLogResourcePolicy } from "../../aws";
import { registerMapping } from "../index";
import { Fn, TerraformLocal } from "cdktf";

// this maps the custom resource type to a Terraform resource. That leaves
// us with a Lambda function being still present (the custom resource). We
// might need a way to remove these as well.
registerMapping("Custom::CloudwatchLogResourcePolicy", {
  resource: (scope: Construct, id: string, props: any) => {
    const local = new TerraformLocal(scope, 'cloudwatchpolicymapping', Fn.jsondecode(props.Update))

    const mappedProps: cloudwatchLogResourcePolicy.CloudwatchLogResourcePolicyConfig = {
      policyName: `\${${local.asString}.parameters.policyName}`,
      // policyDocument: Fn.lookup(Fn.jsondecode(local.asString), 'parameters', { default: 'default' }),
      policyDocument: `\${${local.asString}.parameters.policyDocument}`,
    };

    // delete props we successfully mapped to mark them as handled
    Object.keys(props).forEach((key) => delete (props as any)[key]);

    return new cloudwatchLogResourcePolicy.CloudwatchLogResourcePolicy(scope, id, mappedProps);
  },
  attributes: {
  },
});
