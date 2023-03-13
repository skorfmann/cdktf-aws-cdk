
    import { cloudcontrolapiResource } from "../../../../aws";
    import { Construct } from "constructs";
    import { Fn, propertyAccess } from "cdktf";
    import { registerMapping } from "../../../index";

    registerMapping("AWS::SES::VdmAttributes", {
      resource: (scope: Construct, id: string, props: any) => {

        const clonedProps = {...props}

        // delete props we successfully mapped to mark them as handled
        Object.keys(props).forEach((key) => delete (props as any)[key]);

        return new cloudcontrolapiResource.CloudcontrolapiResource(scope, id, {
          typeName: "AWS::SES::VdmAttributes",
          desiredState: JSON.stringify(clonedProps),
        });
      },
      attributes: {
        Ref: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["VdmAttributesResourceId"]),
        VdmAttributesResourceId: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["VdmAttributesResourceId"]),
DashboardAttributes: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["DashboardAttributes"]),
GuardianAttributes: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["GuardianAttributes"]),
      },
    })
  