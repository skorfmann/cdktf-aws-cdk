
# Unsupported AWS CloudFormation Resources

The following AWS CloudFormation resources are not supported by the CloudControl API yet.

| Service | Resources |
| --- | --- |
| ACMPCA | AWS::ACMPCA::Certificate, AWS::ACMPCA::CertificateAuthority, AWS::ACMPCA::CertificateAuthorityActivation |
| APS | AWS::APS::RuleGroupsNamespace, AWS::APS::Workspace |
| AccessAnalyzer | AWS::AccessAnalyzer::Analyzer |
| Amplify | AWS::Amplify::App, AWS::Amplify::Branch, AWS::Amplify::Domain |
| AmplifyUIBuilder | AWS::AmplifyUIBuilder::Component, AWS::AmplifyUIBuilder::Form, AWS::AmplifyUIBuilder::Theme |
| ApiGateway | AWS::ApiGateway::Account, AWS::ApiGateway::ApiKey, AWS::ApiGateway::Authorizer, AWS::ApiGateway::BasePathMapping, AWS::ApiGateway::ClientCertificate, AWS::ApiGateway::Deployment, AWS::ApiGateway::DocumentationPart, AWS::ApiGateway::DocumentationVersion, AWS::ApiGateway::DomainName, AWS::ApiGateway::Method, AWS::ApiGateway::Model, AWS::ApiGateway::RequestValidator, AWS::ApiGateway::Resource, AWS::ApiGateway::RestApi, AWS::ApiGateway::Stage, AWS::ApiGateway::UsagePlan, AWS::ApiGateway::VpcLink |
| ApiGatewayV2 | AWS::ApiGatewayV2::Api, AWS::ApiGatewayV2::Authorizer, AWS::ApiGatewayV2::Deployment, AWS::ApiGatewayV2::Model, AWS::ApiGatewayV2::VpcLink |
| AppFlow | AWS::AppFlow::Connector, AWS::AppFlow::ConnectorProfile, AWS::AppFlow::Flow |
| AppIntegrations | AWS::AppIntegrations::DataIntegration, AWS::AppIntegrations::EventIntegration |
| AppRunner | AWS::AppRunner::Service, AWS::AppRunner::VpcIngressConnection |
| AppStream | AWS::AppStream::Application, AWS::AppStream::DirectoryConfig, AWS::AppStream::Entitlement |
| AppSync | AWS::AppSync::DomainName, AWS::AppSync::DomainNameApiAssociation |
| ApplicationInsights | AWS::ApplicationInsights::Application |
| Athena | AWS::Athena::DataCatalog, AWS::Athena::NamedQuery, AWS::Athena::PreparedStatement, AWS::Athena::WorkGroup |
| AuditManager | AWS::AuditManager::Assessment |
| AutoScaling | AWS::AutoScaling::LifecycleHook, AWS::AutoScaling::ScalingPolicy, AWS::AutoScaling::ScheduledAction, AWS::AutoScaling::WarmPool |
| Backup | AWS::Backup::BackupPlan, AWS::Backup::BackupVault, AWS::Backup::Framework, AWS::Backup::ReportPlan |
| Batch | AWS::Batch::ComputeEnvironment, AWS::Batch::JobQueue, AWS::Batch::SchedulingPolicy |
| BillingConductor | AWS::BillingConductor::BillingGroup, AWS::BillingConductor::CustomLineItem, AWS::BillingConductor::PricingPlan, AWS::BillingConductor::PricingRule |
| Budgets | AWS::Budgets::BudgetsAction |
| CE | AWS::CE::AnomalyMonitor, AWS::CE::AnomalySubscription, AWS::CE::CostCategory |
| CUR | AWS::CUR::ReportDefinition |
| Cassandra | AWS::Cassandra::Keyspace, AWS::Cassandra::Table |
| CertificateManager | AWS::CertificateManager::Account |
| Chatbot | AWS::Chatbot::SlackChannelConfiguration |
| CloudFormation | AWS::CloudFormation::HookDefaultVersion, AWS::CloudFormation::HookTypeConfig, AWS::CloudFormation::ResourceDefaultVersion, AWS::CloudFormation::StackSet, AWS::CloudFormation::TypeActivation |
| CloudFront | AWS::CloudFront::CachePolicy, AWS::CloudFront::CloudFrontOriginAccessIdentity, AWS::CloudFront::ContinuousDeploymentPolicy, AWS::CloudFront::Distribution, AWS::CloudFront::Function, AWS::CloudFront::KeyGroup, AWS::CloudFront::OriginAccessControl, AWS::CloudFront::OriginRequestPolicy, AWS::CloudFront::PublicKey, AWS::CloudFront::RealtimeLogConfig, AWS::CloudFront::ResponseHeadersPolicy |
| CloudTrail | AWS::CloudTrail::Channel, AWS::CloudTrail::EventDataStore, AWS::CloudTrail::ResourcePolicy, AWS::CloudTrail::Trail |
| CloudWatch | AWS::CloudWatch::CompositeAlarm, AWS::CloudWatch::MetricStream |
| CodeArtifact | AWS::CodeArtifact::Domain, AWS::CodeArtifact::Repository |
| CodeDeploy | AWS::CodeDeploy::Application |
| CodeGuruProfiler | AWS::CodeGuruProfiler::ProfilingGroup |
| CodePipeline | AWS::CodePipeline::CustomActionType |
| CodeStarConnections | AWS::CodeStarConnections::Connection |
| CodeStarNotifications | AWS::CodeStarNotifications::NotificationRule |
| Config | AWS::Config::AggregationAuthorization, AWS::Config::ConfigurationAggregator, AWS::Config::ConformancePack, AWS::Config::OrganizationConformancePack, AWS::Config::StoredQuery |
| Connect | AWS::Connect::ApprovedOrigin, AWS::Connect::ContactFlow, AWS::Connect::ContactFlowModule, AWS::Connect::HoursOfOperation, AWS::Connect::Instance, AWS::Connect::InstanceStorageConfig, AWS::Connect::IntegrationAssociation, AWS::Connect::PhoneNumber, AWS::Connect::QuickConnect, AWS::Connect::Rule, AWS::Connect::SecurityKey, AWS::Connect::TaskTemplate, AWS::Connect::User, AWS::Connect::UserHierarchyGroup |
| ConnectCampaigns | AWS::ConnectCampaigns::Campaign |
| CustomerProfiles | AWS::CustomerProfiles::Domain, AWS::CustomerProfiles::Integration, AWS::CustomerProfiles::ObjectType |
| DataBrew | AWS::DataBrew::Dataset, AWS::DataBrew::Job, AWS::DataBrew::Project, AWS::DataBrew::Recipe, AWS::DataBrew::Ruleset, AWS::DataBrew::Schedule |
| DataPipeline | AWS::DataPipeline::Pipeline |
| DataSync | AWS::DataSync::Agent, AWS::DataSync::LocationEFS, AWS::DataSync::LocationFSxLustre, AWS::DataSync::LocationFSxONTAP, AWS::DataSync::LocationFSxOpenZFS, AWS::DataSync::LocationFSxWindows, AWS::DataSync::LocationHDFS, AWS::DataSync::LocationNFS, AWS::DataSync::LocationObjectStorage, AWS::DataSync::LocationS3, AWS::DataSync::LocationSMB, AWS::DataSync::Task |
| Detective | AWS::Detective::Graph, AWS::Detective::MemberInvitation |
| DevOpsGuru | AWS::DevOpsGuru::ResourceCollection |
| DirectoryService | AWS::DirectoryService::SimpleAD |
| DocDBElastic | AWS::DocDBElastic::Cluster |
| DynamoDB | AWS::DynamoDB::GlobalTable, AWS::DynamoDB::Table |
| EC2 | AWS::EC2::CapacityReservation, AWS::EC2::CapacityReservationFleet, AWS::EC2::CarrierGateway, AWS::EC2::CustomerGateway, AWS::EC2::DHCPOptions, AWS::EC2::EC2Fleet, AWS::EC2::EIP, AWS::EC2::FlowLog, AWS::EC2::GatewayRouteTableAssociation, AWS::EC2::Host, AWS::EC2::IPAM, AWS::EC2::IPAMPool, AWS::EC2::IPAMResourceDiscovery, AWS::EC2::IPAMResourceDiscoveryAssociation, AWS::EC2::IPAMScope, AWS::EC2::InternetGateway, AWS::EC2::LocalGatewayRoute, AWS::EC2::LocalGatewayRouteTable, AWS::EC2::LocalGatewayRouteTableVPCAssociation, AWS::EC2::LocalGatewayRouteTableVirtualInterfaceGroupAssociation, AWS::EC2::NatGateway, AWS::EC2::NetworkAcl, AWS::EC2::NetworkInsightsAccessScope, AWS::EC2::NetworkInsightsAccessScopeAnalysis, AWS::EC2::NetworkInsightsAnalysis, AWS::EC2::NetworkInsightsPath, AWS::EC2::NetworkInterface, AWS::EC2::PrefixList, AWS::EC2::RouteTable, AWS::EC2::SpotFleet, AWS::EC2::Subnet, AWS::EC2::TransitGateway, AWS::EC2::TransitGatewayAttachment, AWS::EC2::TransitGatewayConnect, AWS::EC2::TransitGatewayMulticastDomain, AWS::EC2::TransitGatewayPeeringAttachment, AWS::EC2::TransitGatewayVpcAttachment, AWS::EC2::VPC, AWS::EC2::VPCDHCPOptionsAssociation, AWS::EC2::VPCEndpointService, AWS::EC2::VPCPeeringConnection, AWS::EC2::VPNConnection, AWS::EC2::VPNGateway, AWS::EC2::Volume |
| ECR | AWS::ECR::PublicRepository, AWS::ECR::PullThroughCacheRule, AWS::ECR::RegistryPolicy, AWS::ECR::ReplicationConfiguration, AWS::ECR::Repository |
| ECS | AWS::ECS::CapacityProvider, AWS::ECS::Cluster, AWS::ECS::ClusterCapacityProviderAssociations, AWS::ECS::PrimaryTaskSet, AWS::ECS::Service, AWS::ECS::TaskDefinition, AWS::ECS::TaskSet |
| EFS | AWS::EFS::AccessPoint, AWS::EFS::FileSystem, AWS::EFS::MountTarget |
| EKS | AWS::EKS::Addon, AWS::EKS::Cluster, AWS::EKS::FargateProfile, AWS::EKS::IdentityProviderConfig, AWS::EKS::Nodegroup |
| EMR | AWS::EMR::Studio, AWS::EMR::StudioSessionMapping |
| EMRContainers | AWS::EMRContainers::VirtualCluster |
| EMRServerless | AWS::EMRServerless::Application |
| ElastiCache | AWS::ElastiCache::GlobalReplicationGroup, AWS::ElastiCache::SubnetGroup, AWS::ElastiCache::User, AWS::ElastiCache::UserGroup |
| ElasticBeanstalk | AWS::ElasticBeanstalk::Application, AWS::ElasticBeanstalk::ApplicationVersion, AWS::ElasticBeanstalk::ConfigurationTemplate, AWS::ElasticBeanstalk::Environment |
| ElasticLoadBalancingV2 | AWS::ElasticLoadBalancingV2::Listener, AWS::ElasticLoadBalancingV2::ListenerRule, AWS::ElasticLoadBalancingV2::TargetGroup |
| EventSchemas | AWS::EventSchemas::RegistryPolicy |
| Events | AWS::Events::ApiDestination, AWS::Events::Archive, AWS::Events::Connection, AWS::Events::Endpoint |
| Evidently | AWS::Evidently::Experiment, AWS::Evidently::Feature, AWS::Evidently::Launch, AWS::Evidently::Project |
| FIS | AWS::FIS::ExperimentTemplate |
| FMS | AWS::FMS::NotificationChannel, AWS::FMS::Policy, AWS::FMS::ResourceSet |
| FSx | AWS::FSx::DataRepositoryAssociation |
| FinSpace | AWS::FinSpace::Environment |
| Forecast | AWS::Forecast::DatasetGroup |
| FraudDetector | AWS::FraudDetector::Detector, AWS::FraudDetector::EntityType, AWS::FraudDetector::EventType, AWS::FraudDetector::Label, AWS::FraudDetector::Outcome, AWS::FraudDetector::Variable |
| GameLift | AWS::GameLift::Alias, AWS::GameLift::Build, AWS::GameLift::Fleet, AWS::GameLift::GameServerGroup, AWS::GameLift::Location |
| GlobalAccelerator | AWS::GlobalAccelerator::Accelerator, AWS::GlobalAccelerator::EndpointGroup, AWS::GlobalAccelerator::Listener |
| Glue | AWS::Glue::Registry, AWS::Glue::Schema |
| Grafana | AWS::Grafana::Workspace |
| GreengrassV2 | AWS::GreengrassV2::ComponentVersion, AWS::GreengrassV2::Deployment |
| GroundStation | AWS::GroundStation::Config, AWS::GroundStation::MissionProfile |
| HealthLake | AWS::HealthLake::FHIRDatastore |
| IAM | AWS::IAM::InstanceProfile, AWS::IAM::OIDCProvider, AWS::IAM::Role, AWS::IAM::SAMLProvider, AWS::IAM::ServerCertificate, AWS::IAM::VirtualMFADevice |
| IVS | AWS::IVS::Channel, AWS::IVS::PlaybackKeyPair, AWS::IVS::RecordingConfiguration, AWS::IVS::StreamKey |
| IVSChat | AWS::IVSChat::LoggingConfiguration, AWS::IVSChat::Room |
| IdentityStore | AWS::IdentityStore::Group |
| ImageBuilder | AWS::ImageBuilder::DistributionConfiguration, AWS::ImageBuilder::ImagePipeline, AWS::ImageBuilder::InfrastructureConfiguration |
| Inspector | AWS::Inspector::AssessmentTarget |
| InspectorV2 | AWS::InspectorV2::Filter |
| InternetMonitor | AWS::InternetMonitor::Monitor |
| IoT | AWS::IoT::AccountAuditConfiguration, AWS::IoT::Authorizer, AWS::IoT::CACertificate, AWS::IoT::Certificate, AWS::IoT::CustomMetric, AWS::IoT::Dimension, AWS::IoT::DomainConfiguration, AWS::IoT::FleetMetric, AWS::IoT::Logging, AWS::IoT::MitigationAction, AWS::IoT::Policy, AWS::IoT::ProvisioningTemplate, AWS::IoT::ResourceSpecificLogging, AWS::IoT::RoleAlias, AWS::IoT::ScheduledAudit, AWS::IoT::SecurityProfile, AWS::IoT::Thing, AWS::IoT::TopicRule, AWS::IoT::TopicRuleDestination |
| IoTAnalytics | AWS::IoTAnalytics::Channel, AWS::IoTAnalytics::Dataset, AWS::IoTAnalytics::Datastore, AWS::IoTAnalytics::Pipeline |
| IoTCoreDeviceAdvisor | AWS::IoTCoreDeviceAdvisor::SuiteDefinition |
| IoTEvents | AWS::IoTEvents::AlarmModel, AWS::IoTEvents::DetectorModel, AWS::IoTEvents::Input |
| IoTFleetHub | AWS::IoTFleetHub::Application |
| IoTFleetWise | AWS::IoTFleetWise::Campaign, AWS::IoTFleetWise::DecoderManifest, AWS::IoTFleetWise::Fleet, AWS::IoTFleetWise::ModelManifest, AWS::IoTFleetWise::SignalCatalog, AWS::IoTFleetWise::Vehicle |
| IoTSiteWise | AWS::IoTSiteWise::AccessPolicy, AWS::IoTSiteWise::Asset, AWS::IoTSiteWise::AssetModel, AWS::IoTSiteWise::Dashboard, AWS::IoTSiteWise::Gateway, AWS::IoTSiteWise::Portal, AWS::IoTSiteWise::Project |
| IoTTwinMaker | AWS::IoTTwinMaker::ComponentType, AWS::IoTTwinMaker::Entity, AWS::IoTTwinMaker::Scene, AWS::IoTTwinMaker::Workspace |
| IoTWireless | AWS::IoTWireless::Destination, AWS::IoTWireless::FuotaTask, AWS::IoTWireless::MulticastGroup, AWS::IoTWireless::NetworkAnalyzerConfiguration, AWS::IoTWireless::PartnerAccount, AWS::IoTWireless::WirelessDevice, AWS::IoTWireless::WirelessGateway |
| KMS | AWS::KMS::Alias, AWS::KMS::Key, AWS::KMS::ReplicaKey |
| KafkaConnect | AWS::KafkaConnect::Connector |
| Kendra | AWS::Kendra::DataSource, AWS::Kendra::Faq, AWS::Kendra::Index |
| KendraRanking | AWS::KendraRanking::ExecutionPlan |
| Kinesis | AWS::Kinesis::Stream |
| KinesisAnalyticsV2 | AWS::KinesisAnalyticsV2::Application |
| KinesisFirehose | AWS::KinesisFirehose::DeliveryStream |
| KinesisVideo | AWS::KinesisVideo::SignalingChannel, AWS::KinesisVideo::Stream |
| LakeFormation | AWS::LakeFormation::Tag |
| Lambda | AWS::Lambda::CodeSigningConfig, AWS::Lambda::EventSourceMapping, AWS::Lambda::Function, AWS::Lambda::Url |
| Lex | AWS::Lex::Bot, AWS::Lex::BotAlias, AWS::Lex::ResourcePolicy |
| LicenseManager | AWS::LicenseManager::Grant, AWS::LicenseManager::License |
| Lightsail | AWS::Lightsail::Alarm, AWS::Lightsail::Bucket, AWS::Lightsail::Certificate, AWS::Lightsail::Container, AWS::Lightsail::Database, AWS::Lightsail::Disk, AWS::Lightsail::Distribution, AWS::Lightsail::Instance, AWS::Lightsail::LoadBalancer, AWS::Lightsail::LoadBalancerTlsCertificate, AWS::Lightsail::StaticIp |
| Logs | AWS::Logs::Destination, AWS::Logs::LogGroup, AWS::Logs::MetricFilter, AWS::Logs::QueryDefinition, AWS::Logs::ResourcePolicy |
| LookoutEquipment | AWS::LookoutEquipment::InferenceScheduler |
| LookoutMetrics | AWS::LookoutMetrics::AnomalyDetector |
| LookoutVision | AWS::LookoutVision::Project |
| M2 | AWS::M2::Application, AWS::M2::Environment |
| MSK | AWS::MSK::BatchScramSecret, AWS::MSK::Cluster, AWS::MSK::Configuration |
| MWAA | AWS::MWAA::Environment |
| Macie | AWS::Macie::AllowList, AWS::Macie::CustomDataIdentifier, AWS::Macie::FindingsFilter, AWS::Macie::Session |
| ManagedBlockchain | AWS::ManagedBlockchain::Accessor |
| MediaConnect | AWS::MediaConnect::Flow, AWS::MediaConnect::FlowEntitlement, AWS::MediaConnect::FlowOutput, AWS::MediaConnect::FlowSource, AWS::MediaConnect::FlowVpcInterface |
| MediaPackage | AWS::MediaPackage::Channel, AWS::MediaPackage::OriginEndpoint, AWS::MediaPackage::PackagingGroup |
| MediaTailor | AWS::MediaTailor::PlaybackConfiguration |
| MemoryDB | AWS::MemoryDB::ACL, AWS::MemoryDB::Cluster, AWS::MemoryDB::ParameterGroup, AWS::MemoryDB::SubnetGroup, AWS::MemoryDB::User |
| NetworkFirewall | AWS::NetworkFirewall::Firewall, AWS::NetworkFirewall::FirewallPolicy, AWS::NetworkFirewall::LoggingConfiguration, AWS::NetworkFirewall::RuleGroup |
| NetworkManager | AWS::NetworkManager::ConnectAttachment, AWS::NetworkManager::ConnectPeer, AWS::NetworkManager::CoreNetwork, AWS::NetworkManager::Device, AWS::NetworkManager::GlobalNetwork, AWS::NetworkManager::Link, AWS::NetworkManager::Site, AWS::NetworkManager::SiteToSiteVpnAttachment, AWS::NetworkManager::TransitGatewayPeering, AWS::NetworkManager::TransitGatewayRouteTableAttachment, AWS::NetworkManager::VpcAttachment |
| NimbleStudio | AWS::NimbleStudio::LaunchProfile, AWS::NimbleStudio::StreamingImage, AWS::NimbleStudio::Studio, AWS::NimbleStudio::StudioComponent |
| Oam | AWS::Oam::Link, AWS::Oam::Sink |
| Omics | AWS::Omics::AnnotationStore, AWS::Omics::RunGroup, AWS::Omics::VariantStore, AWS::Omics::Workflow |
| OpenSearchServerless | AWS::OpenSearchServerless::AccessPolicy, AWS::OpenSearchServerless::Collection, AWS::OpenSearchServerless::SecurityConfig, AWS::OpenSearchServerless::SecurityPolicy, AWS::OpenSearchServerless::VpcEndpoint |
| OpenSearchService | AWS::OpenSearchService::Domain |
| OpsWorksCM | AWS::OpsWorksCM::Server |
| Organizations | AWS::Organizations::Account, AWS::Organizations::OrganizationalUnit, AWS::Organizations::Policy, AWS::Organizations::ResourcePolicy |
| Panorama | AWS::Panorama::ApplicationInstance, AWS::Panorama::Package, AWS::Panorama::PackageVersion |
| Personalize | AWS::Personalize::Dataset |
| Pinpoint | AWS::Pinpoint::InAppTemplate |
| Pipes | AWS::Pipes::Pipe |
| QLDB | AWS::QLDB::Stream |
| QuickSight | AWS::QuickSight::Analysis, AWS::QuickSight::Dashboard, AWS::QuickSight::DataSet, AWS::QuickSight::DataSource, AWS::QuickSight::Template, AWS::QuickSight::Theme |
| RDS | AWS::RDS::DBCluster, AWS::RDS::DBClusterParameterGroup, AWS::RDS::DBInstance, AWS::RDS::DBParameterGroup, AWS::RDS::DBProxy, AWS::RDS::DBProxyEndpoint, AWS::RDS::DBProxyTargetGroup, AWS::RDS::DBSubnetGroup, AWS::RDS::EventSubscription, AWS::RDS::GlobalCluster, AWS::RDS::OptionGroup |
| RUM | AWS::RUM::AppMonitor |
| Redshift | AWS::Redshift::Cluster, AWS::Redshift::ClusterParameterGroup, AWS::Redshift::ClusterSubnetGroup, AWS::Redshift::EndpointAccess, AWS::Redshift::EndpointAuthorization, AWS::Redshift::EventSubscription, AWS::Redshift::ScheduledAction |
| RedshiftServerless | AWS::RedshiftServerless::Namespace, AWS::RedshiftServerless::Workgroup |
| RefactorSpaces | AWS::RefactorSpaces::Route |
| Rekognition | AWS::Rekognition::Collection, AWS::Rekognition::Project, AWS::Rekognition::StreamProcessor |
| ResilienceHub | AWS::ResilienceHub::App, AWS::ResilienceHub::ResiliencyPolicy |
| ResourceExplorer2 | AWS::ResourceExplorer2::DefaultViewAssociation, AWS::ResourceExplorer2::Index, AWS::ResourceExplorer2::View |
| ResourceGroups | AWS::ResourceGroups::Group |
| RoboMaker | AWS::RoboMaker::Fleet, AWS::RoboMaker::Robot, AWS::RoboMaker::RobotApplication, AWS::RoboMaker::SimulationApplication |
| RolesAnywhere | AWS::RolesAnywhere::CRL, AWS::RolesAnywhere::Profile, AWS::RolesAnywhere::TrustAnchor |
| Route53 | AWS::Route53::CidrCollection, AWS::Route53::HealthCheck, AWS::Route53::HostedZone, AWS::Route53::KeySigningKey |
| Route53RecoveryControl | AWS::Route53RecoveryControl::ControlPanel, AWS::Route53RecoveryControl::RoutingControl, AWS::Route53RecoveryControl::SafetyRule |
| Route53RecoveryReadiness | AWS::Route53RecoveryReadiness::Cell, AWS::Route53RecoveryReadiness::ReadinessCheck, AWS::Route53RecoveryReadiness::RecoveryGroup, AWS::Route53RecoveryReadiness::ResourceSet |
| Route53Resolver | AWS::Route53Resolver::FirewallDomainList, AWS::Route53Resolver::FirewallRuleGroup, AWS::Route53Resolver::FirewallRuleGroupAssociation, AWS::Route53Resolver::ResolverRule |
| S3 | AWS::S3::AccessPoint, AWS::S3::Bucket, AWS::S3::MultiRegionAccessPointPolicy, AWS::S3::StorageLens |
| S3ObjectLambda | AWS::S3ObjectLambda::AccessPoint, AWS::S3ObjectLambda::AccessPointPolicy |
| S3Outposts | AWS::S3Outposts::AccessPoint, AWS::S3Outposts::Bucket, AWS::S3Outposts::BucketPolicy |
| SES | AWS::SES::ConfigurationSet, AWS::SES::ConfigurationSetEventDestination, AWS::SES::ContactList, AWS::SES::EmailIdentity, AWS::SES::Template, AWS::SES::VdmAttributes |
| SNS | AWS::SNS::Topic |
| SQS | AWS::SQS::Queue |
| SSM | AWS::SSM::Association, AWS::SSM::Document, AWS::SSM::ResourceDataSync, AWS::SSM::ResourcePolicy |
| SSMContacts | AWS::SSMContacts::Contact, AWS::SSMContacts::ContactChannel |
| SSMIncidents | AWS::SSMIncidents::ReplicationSet, AWS::SSMIncidents::ResponsePlan |
| SSO | AWS::SSO::InstanceAccessControlAttributeConfiguration, AWS::SSO::PermissionSet |
| SageMaker | AWS::SageMaker::AppImageConfig, AWS::SageMaker::Device, AWS::SageMaker::DeviceFleet, AWS::SageMaker::Domain, AWS::SageMaker::FeatureGroup, AWS::SageMaker::Image, AWS::SageMaker::ModelCard, AWS::SageMaker::ModelPackage, AWS::SageMaker::ModelPackageGroup, AWS::SageMaker::MonitoringSchedule, AWS::SageMaker::Pipeline, AWS::SageMaker::Project, AWS::SageMaker::Space, AWS::SageMaker::UserProfile |
| Scheduler | AWS::Scheduler::Schedule, AWS::Scheduler::ScheduleGroup |
| ServiceCatalog | AWS::ServiceCatalog::CloudFormationProvisionedProduct, AWS::ServiceCatalog::ServiceAction |
| ServiceCatalogAppRegistry | AWS::ServiceCatalogAppRegistry::Application, AWS::ServiceCatalogAppRegistry::AttributeGroup |
| Signer | AWS::Signer::SigningProfile |
| SimSpaceWeaver | AWS::SimSpaceWeaver::Simulation |
| StepFunctions | AWS::StepFunctions::Activity, AWS::StepFunctions::StateMachine |
| SupportApp | AWS::SupportApp::AccountAlias, AWS::SupportApp::SlackChannelConfiguration, AWS::SupportApp::SlackWorkspaceConfiguration |
| Synthetics | AWS::Synthetics::Canary, AWS::Synthetics::Group |
| SystemsManagerSAP | AWS::SystemsManagerSAP::Application |
| Timestream | AWS::Timestream::Database, AWS::Timestream::ScheduledQuery, AWS::Timestream::Table |
| Transfer | AWS::Transfer::Agreement, AWS::Transfer::Certificate, AWS::Transfer::Connector, AWS::Transfer::Profile, AWS::Transfer::Workflow |
| VoiceID | AWS::VoiceID::Domain |
| WAFv2 | AWS::WAFv2::IPSet, AWS::WAFv2::LoggingConfiguration, AWS::WAFv2::RegexPatternSet, AWS::WAFv2::RuleGroup, AWS::WAFv2::WebACL, AWS::WAFv2::WebACLAssociation |
| XRay | AWS::XRay::Group, AWS::XRay::ResourcePolicy, AWS::XRay::SamplingRule |
