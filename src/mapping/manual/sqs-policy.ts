import { Construct } from "constructs";
import { sqsQueuePolicy } from "../../aws";
import { registerMapping } from "../index";
import { AwsSqsQueuepolicy } from "cfn-types/types/aws/sqs/queuepolicy";

registerMapping("AWS::SQS::QueuePolicy", {
  resource: (scope: Construct, id: string, props: AwsSqsQueuepolicy) => {
    const mappedProps: sqsQueuePolicy.SqsQueuePolicyConfig = {
      policy: JSON.stringify(props.PolicyDocument),
      queueUrl: props.Queues[0],
    };
    // delete props we successfully mapped to mark them as handled
    Object.keys(props).forEach((key) => delete (props as any)[key]);

    return new sqsQueuePolicy.SqsQueuePolicy(scope, id, mappedProps);
  },
  attributes: {},
});
