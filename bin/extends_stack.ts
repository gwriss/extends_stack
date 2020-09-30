#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import {ExtendsStack} from '../lib/extends_stack';
import {BaseStack} from "../basestack";

const app = new cdk.App();
new ExtendsStack(app, 'ExtendsStack');
new BaseStack(app, 'BaseStack');
