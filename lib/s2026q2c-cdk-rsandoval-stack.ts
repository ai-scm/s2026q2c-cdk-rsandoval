import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

import * as lambdaNodejs from 'aws-cdk-lib/aws-lambda-nodejs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';

export class S2026Q2CCdkRsandovalStack extends cdk.Stack {

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lambdaNodejs.NodejsFunction(this, 'HelloLambda', {
      functionName:"s2026q2c-cdk-rsandoval",
      entry: 'lambda/hello.ts',
      handler: 'handler'
    });

    const bucket = new s3.Bucket(this, 'SemilleroBucket', {
      bucketName: "s2026q2c-cdk-rsandoval",
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true
    });

    new s3deploy.BucketDeployment(this, 'DeployHolaMundo', {
      destinationBucket: bucket,
      sources: [
        s3deploy.Source.asset('./assets')
      ]
    });
  }
}
