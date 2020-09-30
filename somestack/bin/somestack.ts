#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { SomestackStack } from '../lib/somestack-stack';

const app = new cdk.App();
new SomestackStack(app, 'SomestackStack');
