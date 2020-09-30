import {SynthUtils} from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as ExtendsStack from '../lib/extends_stack-stack';
import * as BaseStack from "../basestack";

test('Empty Stack', () => {
    const app = new cdk.App();

    const stack1 = new ExtendsStack.ExtendsStackStack(app, 'MyTestStack');
    const stack2 = new BaseStack.BaseStack(app, 'MyFailingStack');

    try {
        SynthUtils.toCloudFormation(stack1);
    } catch (e) {
        console.log(e);
    }

    try {
        SynthUtils.toCloudFormation(stack2);
    } catch (e) {
        console.log(e);
    }
});
