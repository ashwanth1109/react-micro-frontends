#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { DeployStack } from '../lib/deploy-stack';

const app = new cdk.App();
new DeployStack(app, 'DeployStack');
