#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib/core';
import { S2026Q2CCdkRsandovalStack } from '../lib/s2026q2c-cdk-rsandoval-stack';

const app = new cdk.App();
new S2026Q2CCdkRsandovalStack(app, 'S2026Q2CCdkRsandovalStack', {
  /* If you don't specify 'env', this stack will be environment-agnostic.
   * Account/Region-dependent features and context lookups will not work,
   * but a single synthesized template can be deployed anywhere. */

  /* Uncomment the next line to specialize this stack for the AWS Account
   * and Region that are implied by the current CLI configuration. */
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },

  /* Uncomment the next line if you know exactly what Account and Region you
   * want to deploy the stack to. */
  // env: { account: '123456789012', region: 'us-east-1' },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});
