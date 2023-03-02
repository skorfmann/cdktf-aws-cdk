// originally from https://github.com/skorfmann/cfn2tf/blob/6ff9f366462b270229b7415f68c13a7bea28c144/cfn.ts
export interface CloudFormationResource {
  readonly Type: string;
  readonly Properties: any;
  readonly Condition?: string;
}

export interface CloudFormationParameter {
  AllowedPattern?: string;
  AllowedValues?: string[];
  ConstraintDescription?: string;
  Default?: string | number | string[];
  Description?: string;
  MaxLength?: number;
  MaxValue?: number;
  MinLength?: number;
  MinValue?: number;
  NoEcho?: boolean;
  Type: 'String' | 'Number' | 'List<Number>' | 'CommaDelimitedList' | string;
}

export interface CloudFormationTemplate {
  Resources?: { [id: string]: CloudFormationResource };
  Conditions?: { [id: string]: any };
  Outputs?: { [id: string]: any };
  Parameters?: { [id: string]: CloudFormationParameter };
}
