import { Construct } from "constructs";
import { registerMapping } from "../index";
import { sfnStateMachine } from "../../aws";
import { AwsStepfunctionsStatemachine } from "cfn-types/types/aws/stepfunctions/statemachine";

const mapping = (props: AwsStepfunctionsStatemachine) => {
  const mapped: sfnStateMachine.SfnStateMachineConfig = {
    definition: props.DefinitionString ?? JSON.stringify(props.Definition),
    name: props.StateMachineName!,
    roleArn: props.RoleArn!,
    tags: props.Tags?.reduce<{ [key: string]: string }>((tags, { Key, Value }) => {
      tags[Key!] = Value!;
      return tags;
    }, {}),
    type: props.StateMachineType!,
    loggingConfiguration: props.LoggingConfiguration && {
      level: props.LoggingConfiguration.Level!,
      includeExecutionData: props.LoggingConfiguration.IncludeExecutionData!,
      logDestination: props.LoggingConfiguration.Destinations![0].CloudWatchLogsLogGroup?.LogGroupArn!,
    },
    tracingConfiguration: props.TracingConfiguration && {
      enabled: props.TracingConfiguration.Enabled!,
    },
  };

  return mapped;
};

registerMapping("AWS::StepFunctions::StateMachine", {
  resource: (scope: Construct, id: string, props: AwsStepfunctionsStatemachine) => {
    const mapped = mapping(props);
    // delete props we successfully mapped to mark them as handled
    Object.keys(props).forEach((key) => delete (props as any)[key]);

    return new sfnStateMachine.SfnStateMachine(scope, id, mapped);
  },
  attributes: {
    Arn: (i: sfnStateMachine.SfnStateMachine) => i.arn,
    Ref: (i: sfnStateMachine.SfnStateMachine) => i.arn,
    Name: (i: sfnStateMachine.SfnStateMachine) => i.name,
    RoleArn: (i: sfnStateMachine.SfnStateMachine) => i.roleArn,
    Type: (i: sfnStateMachine.SfnStateMachine) => i.type,
  },
});
