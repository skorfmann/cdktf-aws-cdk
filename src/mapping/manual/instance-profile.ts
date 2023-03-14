import { Fn } from "cdktf";
import { CloudcontrolapiResource } from "../../aws/cloudcontrolapi-resource";
import { registerMapping } from "../index";

registerMapping("AWS::IAM::InstanceProfile", {
  resource: (scope, id, props) => {
    const res = new CloudcontrolapiResource(scope, id, {
      typeName: "AWS::IAM::InstanceProfile",
      desiredState: Fn.jsonencode({
        Roles: props.Roles,
        InstanceProfileName: props.InstanceProfileName,
        Path: props.Path,
      })
    })

    delete props.Path;
    delete props.InstanceProfileName;
    delete props.Roles;

    return res;
  },
  attributes: {
    Ref: (instanceProfile: any) => instanceProfile.name,
  },
});
