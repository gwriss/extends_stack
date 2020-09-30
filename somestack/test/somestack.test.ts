import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as Somestack from '../lib/somestack-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Somestack.SomestackStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
