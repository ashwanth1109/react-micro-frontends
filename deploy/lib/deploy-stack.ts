import { App, Stack, StackProps } from "@aws-cdk/core";
import { Bucket } from "@aws-cdk/aws-s3";

export class DeployStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    new Bucket(this, "react-mfe-w4544");
  }
}
