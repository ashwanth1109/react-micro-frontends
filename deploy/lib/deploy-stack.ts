import { App, RemovalPolicy, Stack, StackProps } from "@aws-cdk/core";
import { Bucket } from "@aws-cdk/aws-s3";
import { BucketDeployment, Source } from "@aws-cdk/aws-s3-deployment";
import {
  CloudFrontWebDistribution,
  ViewerProtocolPolicy,
} from "@aws-cdk/aws-cloudfront";

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

    new BucketDeployment(this, "DeployContainerAssets", {
      destinationBucket,
      sources: [Source.asset("../container/dist")],
    });

    new BucketDeployment(this, "DeployLandingAssets", {
      destinationBucket,
      sources: [Source.asset("../landing/dist")],
      destinationKeyPrefix: "landing/",
    });

    const distribution = new CloudFrontWebDistribution(this, "React-MFE-CDN", {
      originConfigs: [
        {
          s3OriginSource: {
            s3BucketSource: destinationBucket,
          },
          behaviors: [{ isDefaultBehavior: true }],
        },
      ],
      defaultRootObject: "/index.html",
      viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      errorConfigurations: [
        {
          errorCode: 403,
          responseCode: 200,
          responsePagePath: "/index.html",
          errorCachingMinTtl: 10,
        },
      ],
    });
  }
}
