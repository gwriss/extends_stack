#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { BasestackStack } from '../lib/basestack-stack';

const app = new cdk.App();
new BasestackStack(app, 'BasestackStack');
