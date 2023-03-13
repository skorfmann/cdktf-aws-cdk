
    import { cloudcontrolapiResource } from "../../../../aws";
    import { Construct } from "constructs";
    import { Fn, propertyAccess } from "cdktf";
    import { registerMapping } from "../../../index";

    registerMapping("AWS::EC2::EC2Fleet", {
      resource: (scope: Construct, id: string, props: any) => {

        const clonedProps = {...props}

        // delete props we successfully mapped to mark them as handled
        Object.keys(props).forEach((key) => delete (props as any)[key]);

        return new cloudcontrolapiResource.CloudcontrolapiResource(scope, id, {
          typeName: "AWS::EC2::EC2Fleet",
          desiredState: JSON.stringify(clonedProps),
        });
      },
      attributes: {
        Ref: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["FleetId"]),
        TargetCapacitySpecification: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["TargetCapacitySpecification"]),
OnDemandOptions: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["OnDemandOptions"]),
Type: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["Type"]),
ExcessCapacityTerminationPolicy: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["ExcessCapacityTerminationPolicy"]),
TagSpecifications: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["TagSpecifications"]),
SpotOptions: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["SpotOptions"]),
ValidFrom: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["ValidFrom"]),
ReplaceUnhealthyInstances: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["ReplaceUnhealthyInstances"]),
LaunchTemplateConfigs: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["LaunchTemplateConfigs"]),
FleetId: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["FleetId"]),
TerminateInstancesWithExpiration: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["TerminateInstancesWithExpiration"]),
ValidUntil: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["ValidUntil"]),
Context: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["Context"]),
      },
    })
  