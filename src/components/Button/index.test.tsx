import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { SubmitButton } from './index';

it('renders correctly', () => {
  const tree = ReactTestRenderer
    .create(<SubmitButton value="値" />)
    .toJSON()

  expect(tree).toMatchSnapshot()
});
