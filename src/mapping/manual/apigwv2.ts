import { apigatewayv2Stage, apigatewayv2Integration, apigatewayv2Route, cloudcontrolapiResource } from "../../aws";
import { registerMapping } from "../index";
import { Fn } from "cdktf";
import { Construct } from "constructs";
import { AwsApigatewayv2Api, AwsApigatewayv2Stage, AwsApigatewayv2Integration, AwsApigatewayv2Route} from 'cfn-types/types/aws/apigatewayv2'

registerMapping("AWS::ApiGatewayV2::Api", {
  resource: (scope: Construct, id: string, props: AwsApigatewayv2Api) => {

    const clonedProps = {...props}

    // delete props we successfully mapped to mark them as handled
    Object.keys(props).forEach((key) => delete (props as any)[key]);

    return new cloudcontrolapiResource.CloudcontrolapiResource(scope, id, {
      typeName: "AWS::ApiGatewayV2::Api",
      desiredState: JSON.stringify(clonedProps),
    });
  },
  attributes: {
    Ref: (i: cloudcontrolapiResource.CloudcontrolapiResource) => Fn.lookup(Fn.jsondecode(i.properties), "ApiId", "NoApiIdfound"),
  },
});

registerMapping("AWS::ApiGatewayV2::Stage", {
  resource: (scope: Construct, id: string, props: AwsApigatewayv2Stage) => {
    const t = props.Tags as any || [];
    const tags = t.reduce((tag: any, current: { Key: string | number; Value: any; }) => {
        (tag as any)[current.Key] = current.Value;
        return tag;
    }, {});
    const mappedProps: apigatewayv2Stage.Apigatewayv2StageConfig = {
      accessLogSettings: {
        destinationArn: props.AccessLogSettings?.DestinationArn!,
        format: props.AccessLogSettings?.Format!,
      },
      apiId: props.ApiId,
      autoDeploy: props.AutoDeploy,
      clientCertificateId: props.ClientCertificateId,
      defaultRouteSettings: {
        dataTraceEnabled: props.DefaultRouteSettings?.DataTraceEnabled!,
        detailedMetricsEnabled: props.DefaultRouteSettings?.DetailedMetricsEnabled!,
        loggingLevel: props.DefaultRouteSettings?.LoggingLevel!,
        throttlingBurstLimit: props.DefaultRouteSettings?.ThrottlingBurstLimit!,
        throttlingRateLimit: props.DefaultRouteSettings?.ThrottlingRateLimit!,
      },
      deploymentId: props.DeploymentId,
      description: props.Description,
      routeSettings: props.RouteSettings as any,
      name: props.StageName,
      stageVariables: props.StageVariables as any,
      tags,
    };
    // delete props we successfully mapped to mark them as handled
    Object.keys(props).forEach((key) => delete (props as any)[key]);
    return new apigatewayv2Stage.Apigatewayv2Stage(scope, id, mappedProps);
  },
  attributes: {
    Arn: (i: apigatewayv2Stage.Apigatewayv2Stage) => i.arn,
    Ref: (i: apigatewayv2Stage.Apigatewayv2Stage) => i.name
  },
});

registerMapping("AWS::ApiGatewayV2::Integration", {
  resource: (scope: Construct, id: string, props: AwsApigatewayv2Integration) => {
    const mappedProps: apigatewayv2Integration.Apigatewayv2IntegrationConfig = {
      apiId: props.ApiId,
      connectionId: props.ConnectionId,
      connectionType: props.ConnectionType,
      contentHandlingStrategy: props.ContentHandlingStrategy,
      credentialsArn: props.CredentialsArn,
      description: props.Description,
      integrationMethod: props.IntegrationMethod,
      integrationSubtype: props.IntegrationSubtype,
      integrationType: props.IntegrationType,
      integrationUri: props.IntegrationUri,
      passthroughBehavior: props.PassthroughBehavior,
      payloadFormatVersion: props.PayloadFormatVersion,
      requestParameters: props.RequestParameters as any,
      requestTemplates: props.RequestTemplates as any,
      templateSelectionExpression: props.TemplateSelectionExpression,
      timeoutMilliseconds: props.TimeoutInMillis,
    };
    // delete props we successfully mapped to mark them as handled
    Object.keys(props).forEach((key) => delete (props as any)[key]);
    return new apigatewayv2Integration.Apigatewayv2Integration(scope, id, mappedProps);
  },
  attributes: {
    // Arn: (i: apigatewayv2Integration.Apigatewayv2Integration) => i.arn,
    Ref: (i: apigatewayv2Integration.Apigatewayv2Integration) => i.id
  },
});

registerMapping("AWS::ApiGatewayV2::Route", {
  resource: (scope: Construct, id: string, props: AwsApigatewayv2Route) => {
    const mappedProps: apigatewayv2Route.Apigatewayv2RouteConfig = {
      apiId: props.ApiId,
      apiKeyRequired: props.ApiKeyRequired,
      authorizationScopes: props.AuthorizationScopes,
      authorizationType: props.AuthorizationType,
      authorizerId: props.AuthorizerId,
      modelSelectionExpression: props.ModelSelectionExpression,
      operationName: props.OperationName,
      requestModels: props.RequestModels as any,
      requestParameter: props.RequestParameters as any,
      routeKey: props.RouteKey,
      routeResponseSelectionExpression: props.RouteResponseSelectionExpression,
      target: props.Target,
    };

    // delete props we successfully mapped to mark them as handled
    Object.keys(props).forEach((key) => delete (props as any)[key]);
    return new apigatewayv2Route.Apigatewayv2Route(scope, id, mappedProps);
  },
  attributes: {
    // Arn: (i: apigatewayv2Route.Apigatewayv2Route) => i.arn,
    Ref: (i: apigatewayv2Route.Apigatewayv2Route) => i.id
  },
});
