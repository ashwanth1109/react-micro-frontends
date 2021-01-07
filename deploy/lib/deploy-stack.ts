import { App, RemovalPolicy, Stack, StackProps } from "@aws-cdk/core";
import { Bucket } from "@aws-cdk/aws-s3";
import { BucketDeployment, Source } from "@aws-cdk/aws-s3-deployment";

export class DeployStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucketName = "react-mfe-w4544";
    const destinationBucket = new Bucket(this, bucketName, {
      bucketName,
      publicReadAccess: true,
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "index.html",
      removalPolicy: RemovalPolicy.RETAIN,
    });

    new BucketDeployment(this, "DeployFEAssets", {
      destinationBucket,
      sources: [Source.asset("../container/dist")],
    });
  }
}
