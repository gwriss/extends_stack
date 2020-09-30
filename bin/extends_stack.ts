#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { ExtendsStackStack } from '../lib/extends_stack-stack';

const app = new cdk.App();
new ExtendsStackStack(app, 'ExtendsStackStack');
