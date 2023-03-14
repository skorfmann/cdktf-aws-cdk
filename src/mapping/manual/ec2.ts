import { Construct } from "constructs";
import { instance } from "../../aws";
import { registerMapping } from "../index";
import { AwsEc2Instance } from "cfn-types/types/aws/ec2/instance";

registerMapping("AWS::EC2::Instance", {
  resource: (scope: Construct, id: string, props: AwsEc2Instance) => {
    const tags = props.Tags?.reduce((tag: any, current: { Key: string | number; Value: any; }) => {
        (tag as any)[current.Key] = current.Value;
        return tag;
      }, {});

    const mappedProps: instance.InstanceConfig = {
      instanceType: props.InstanceType,
      vpcSecurityGroupIds: props.SecurityGroupIds,
      volumeTags: props.PropagateTagsToVolumeOnCreation ? tags : undefined,
      userData: props.UserData,
      tags: props.Tags?.reduce((tag: any, current: { Key: string | number; Value: any; }) => {
        (tag as any)[current.Key] = current.Value;
        return tag;
      }, {}),
      tenancy: props.Tenancy,
      subnetId: props.SubnetId,
      sourceDestCheck: props.SourceDestCheck,
      securityGroups: props.SecurityGroups,
      privateIp: props.PrivateIpAddress,
      networkInterface: props.NetworkInterfaces?.map((ni) => ({
        networkInterfaceId: ni.NetworkInterfaceId!,
        deviceIndex: Number(ni.DeviceIndex),
        deleteOnTermination: ni.DeleteOnTermination,
      })),
      monitoring: props.Monitoring,
      launchTemplate: {
        id: props.LaunchTemplate?.LaunchTemplateId,
        name: props.LaunchTemplate?.LaunchTemplateName,
        version: props.LaunchTemplate?.Version,
      },
      iamInstanceProfile: props.IamInstanceProfile,
      keyName: props.KeyName,
      ipv6AddressCount: props.Ipv6AddressCount,
      ipv6Addresses: props.Ipv6Addresses?.map((ipv6: { Ipv6Address: any; }) => (ipv6.Ipv6Address)),
      disableApiTermination: props.DisableApiTermination,
      instanceInitiatedShutdownBehavior: props.InstanceInitiatedShutdownBehavior,
      ebsOptimized: props.EbsOptimized,
      hostId: props.HostId,
      associatePublicIpAddress: props.NetworkInterfaces?.some((ni) => ni.AssociatePublicIpAddress),
      hibernation: props.HibernationOptions?.Configured,
      enclaveOptions: {
        enabled: props.EnclaveOptions?.Enabled,
      },
      cpuCoreCount: props.CpuOptions?.CoreCount,
      cpuThreadsPerCore: props.CpuOptions?.ThreadsPerCore,
      creditSpecification: {
        cpuCredits: props.CreditSpecification?.CPUCredits,
      },
      ami: props.ImageId,
    };
    // delete props we successfully mapped to mark them as handled
    Object.keys(props).forEach((key) => delete (props as any)[key]);

    return new instance.Instance(scope, id, mappedProps);
  },
  attributes: {
    Arn: (i: instance.Instance) => i.arn,
    Ref: (i: instance.Instance) => i.id,
  },
});
