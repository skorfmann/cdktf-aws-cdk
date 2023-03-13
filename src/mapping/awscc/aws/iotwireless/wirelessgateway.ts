
    import { cloudcontrolapiResource } from "../../../../aws";
    import { Construct } from "constructs";
    import { Fn, propertyAccess } from "cdktf";
    import { registerMapping } from "../../../index";

    registerMapping("AWS::IoTWireless::WirelessGateway", {
      resource: (scope: Construct, id: string, props: any) => {

        const clonedProps = {...props}

        // delete props we successfully mapped to mark them as handled
        Object.keys(props).forEach((key) => delete (props as any)[key]);

        return new cloudcontrolapiResource.CloudcontrolapiResource(scope, id, {
          typeName: "AWS::IoTWireless::WirelessGateway",
          desiredState: JSON.stringify(clonedProps),
        });
      },
      attributes: {
        Ref: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["Id"]),
        Name: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["Name"]),
Description: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["Description"]),
Tags: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["Tags"]),
LoRaWAN: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["LoRaWAN"]),
Arn: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["Arn"]),
Id: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["Id"]),
ThingArn: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["ThingArn"]),
ThingName: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["ThingName"]),
LastUplinkReceivedAt: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["LastUplinkReceivedAt"]),
      },
    })
  