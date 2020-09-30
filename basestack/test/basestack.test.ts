import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as Basestack from '../lib/base-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Basestack.BaseStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
