import { Construct } from "constructs";
import { cloudwatchEventBus } from "../../aws";
import { registerMapping } from "../index";
import { AwsEventsEventbus } from "cfn-types/types/aws/events/eventbus";

registerMapping("AWS::Events::EventBus", {
  resource: (scope: Construct, id: string, props: AwsEventsEventbus) => {
    const tags = props.Tags?.reduce((tag: any, current: { Key: string | number; Value: any; }) => {
        (tag as any)[current.Key] = current.Value;
        return tag;
      }, {});

    const mappedProps: cloudwatchEventBus.CloudwatchEventBusConfig = {
      name: props.Name,
      eventSourceName: props.EventSourceName,
      tags: tags,
    };
    // delete props we successfully mapped to mark them as handled
    Object.keys(props).forEach((key) => delete (props as any)[key]);

    return new cloudwatchEventBus.CloudwatchEventBus(scope, id, mappedProps);
  },
  attributes: {
    Arn: (i: cloudwatchEventBus.CloudwatchEventBus) => i.arn,
    Ref: (i: cloudwatchEventBus.CloudwatchEventBus) => i.name
  },
});
