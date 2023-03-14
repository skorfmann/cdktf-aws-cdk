import { Construct } from "constructs";
import { ssmParameter } from "../../aws";
import { registerMapping } from "../index";
import { AwsSsmParameter } from "cfn-types/types/aws/ssm/parameter";

registerMapping("AWS::SSM::Parameter", {
  resource: (scope: Construct, id: string, props: AwsSsmParameter) => {
    const tags: { [key: string]: string } = {};
    for (const tag of Object.keys(props.Tags || {})) {
      tags[tag] = props.Tags![tag] as string;
    }

    const mappedProps: ssmParameter.SsmParameterConfig = {
      name: props.Name!,
      type: props.Type!,
      value: props.Value,
      description: props.Description,
      allowedPattern: props.AllowedPattern,
      tags: tags,
      tier: props.Tier,
      dataType: props.DataType,
      // AWS CloudFormation doesn't support creating a SecureString parameter type.
      // see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-parameter.html#cfn-ssm-parameter-type
      // keyId: props.KeyId,
    };
    // delete props we successfully mapped to mark them as handled
    Object.keys(props).forEach((key) => delete (props as any)[key]);

    return new ssmParameter.SsmParameter(scope, id, mappedProps);
  },
  attributes: {
    Arn: (i: ssmParameter.SsmParameter) => i.arn,
    Ref: (i: ssmParameter.SsmParameter) => i.name
  },
});
