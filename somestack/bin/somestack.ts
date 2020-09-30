#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import {SomeLibStack} from '../lib/some-lib-stack';
import {SomeStack} from '../some-stack';

const app = new cdk.App();
new SomeLibStack(app, 'SomeLibStack');
new SomeStack(app, 'SomeStack');
