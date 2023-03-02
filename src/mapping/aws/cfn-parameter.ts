import { registerMapping } from "../index";
import { DataAwsSsmParameter } from "../../aws/data-aws-ssm-parameter";

registerMapping("AWS::SSM::Parameter::", {
  resource: (scope, id, props) => {
    const key = props.defaultValue;
    const paramType = props.typeName.slice('AWS::SSM::Parameter::'.length);

    const data = () => {
      if (paramType.startsWith('Value<')) {
        const type = paramType.slice('Value<'.length);
        if (type.startsWith('List<') || type === 'CommaDelimitedList>') {
            return new DataAwsSsmParameter(scope, id, {
                name: <string>key,
            })
        }
        return new DataAwsSsmParameter(scope, id, {
          name: <string>key,
        })
      } else {
        throw new Error("Unsupported type: " + paramType);
      }
    }

    return data() as any
  },
  attributes: {
    Ref: (data: any) => data.value,
  },
});
