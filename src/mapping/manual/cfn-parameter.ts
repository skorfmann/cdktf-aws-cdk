import { registerMapping } from "../index";
import { DataAwsSsmParameter } from "../../aws/data-aws-ssm-parameter";
import { Fn } from "cdktf";

class DataAwsSsmParameterList extends DataAwsSsmParameter {
  public get valueAsList() {
    return Fn.split(',', this.getStringAttribute('value'));
  }
}

registerMapping("AWS::SSM::Parameter::", {
  resource: (scope, id, props) => {
    const key = props.defaultValue;
    const paramType = props.typeName.slice('AWS::SSM::Parameter::'.length);

    const data = () => {
      if (paramType.startsWith('Value<')) {
        const type = paramType.slice('Value<'.length);
        if (type.startsWith('List<') || type === 'CommaDelimitedList>') {
            return new DataAwsSsmParameterList(scope, id, {
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
    Ref: (data: any) => {
      if (data instanceof DataAwsSsmParameterList) {
        return data.valueAsList;
      } else {
        return data.value;
      }
    }
  },
});
