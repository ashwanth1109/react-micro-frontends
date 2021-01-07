import { App, Stack, StackProps } from "@aws-cdk/core";

export class DeployStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);
  }
}
