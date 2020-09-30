import {SynthUtils} from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as ExtendsStack from '../lib/extends_stack';
import * as BaseStack from "../basestack";

test('Empty Stack', () => {
    const app = new cdk.App();

    const extendsStack = new ExtendsStack.ExtendsStack(app, 'ExtendsStack');
    const baseStack = new BaseStack.BaseStack(app, 'BaseStack');

    try {
        SynthUtils.toCloudFormation(extendsStack);
    } catch (e) {
        console.log(e);
    }

    try {
        SynthUtils.toCloudFormation(baseStack);
    } catch (e) {
        console.log(e);
    }
});
