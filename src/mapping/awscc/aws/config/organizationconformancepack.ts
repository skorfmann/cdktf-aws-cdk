
    import { cloudcontrolapiResource } from "../../../../aws";
    import { Construct } from "constructs";
    import { Fn, propertyAccess } from "cdktf";
    import { registerMapping } from "../../../index";

    registerMapping("AWS::Config::OrganizationConformancePack", {
      resource: (scope: Construct, id: string, props: any) => {

        const clonedProps = {...props}

        // delete props we successfully mapped to mark them as handled
        Object.keys(props).forEach((key) => delete (props as any)[key]);

        return new cloudcontrolapiResource.CloudcontrolapiResource(scope, id, {
          typeName: "AWS::Config::OrganizationConformancePack",
          desiredState: JSON.stringify(clonedProps),
        });
      },
      attributes: {
        Ref: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["OrganizationConformancePackName"]),
        OrganizationConformancePackName: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["OrganizationConformancePackName"]),
TemplateS3Uri: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["TemplateS3Uri"]),
TemplateBody: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["TemplateBody"]),
DeliveryS3Bucket: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["DeliveryS3Bucket"]),
DeliveryS3KeyPrefix: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["DeliveryS3KeyPrefix"]),
ConformancePackInputParameters: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["ConformancePackInputParameters"]),
ExcludedAccounts: (i: cloudcontrolapiResource.CloudcontrolapiResource) => propertyAccess(Fn.jsondecode(i.properties), ["ExcludedAccounts"]),
      },
    })
  