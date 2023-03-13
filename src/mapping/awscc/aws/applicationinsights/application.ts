
    import { cloudcontrolapiResource } from "../../../../aws";
    import { Construct } from "constructs";
    import { Fn, propertyAccess } from "cdktf";
    import { registerMapping } from "../../../index";

    registerMapping("AWS::ApplicationInsights::Application", {
      resource: (scope: Construct, id: string, props: any) => {

        const clonedProps = {...props}

        // delete props we successfully mapped to mark them as handled
        Object.keys(props).forEach((key) => delete (props as any)[key]);

        return new cloudcontrolapiResource.CloudcontrolapiResource(scope, id, {
          typeName: "AWS::ApplicationInsights::Application",
          desiredState: JSON.stringify(clonedProps),
        });
      },
      attributes: {
        Ref: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["ApplicationARN"]),
        ResourceGroupName: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["ResourceGroupName"]),
ApplicationARN: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["ApplicationARN"]),
CWEMonitorEnabled: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["CWEMonitorEnabled"]),
OpsCenterEnabled: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["OpsCenterEnabled"]),
OpsItemSNSTopicArn: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["OpsItemSNSTopicArn"]),
Tags: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["Tags"]),
CustomComponents: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["CustomComponents"]),
LogPatternSets: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["LogPatternSets"]),
AutoConfigurationEnabled: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["AutoConfigurationEnabled"]),
ComponentMonitoringSettings: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["ComponentMonitoringSettings"]),
GroupingType: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["GroupingType"]),
      },
    })
  