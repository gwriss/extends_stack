import {SynthUtils} from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as SomeLibStack from '../lib/some-lib-stack';
import * as SomeStack from '../some-stack';
import * as SomeExtendsStack from '../../some-extends-stack';
import * as BaseStack from '../../basestack/lib/base-stack';

test('Empty Stack', () => {
    const app = new cdk.App();

    // Works!
    const someLibStack = new SomeLibStack.SomeLibStack(app, 'SomeLibStack');
    SynthUtils.toCloudFormation(someLibStack);

    const someStack = new SomeStack.SomeStack(app, 'SomeStack');
    try {
        // Error: Unable to find artifact with id "SomeStack"
        SynthUtils.toCloudFormation(someStack);
    } catch (e) {
        console.log(e);
    }

    const someExtendsStack = new SomeExtendsStack.SomeExtendsStack(app, 'SomeExtendsStack');
    try {
        // Error: Unable to find artifact with id "SomeExtendsStack6809269F"
        SynthUtils.toCloudFormation(someExtendsStack);
    } catch (e) {
        console.log(e);
    }

    const baseStack = new BaseStack.BaseStack(app, 'BaseStack');
    try {
        // Error: Unable to find artifact with id "BaseStack588466E4"
        SynthUtils.toCloudFormation(baseStack);
    } catch (e) {
        console.log(e);
    }
});
