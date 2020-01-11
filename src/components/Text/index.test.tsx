import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Text from './index';

it('renders correctly', () => {
  const tree = ReactTestRenderer
    .create(<Text>テキスト</Text>)
    .toJSON()

  expect(tree).toMatchSnapshot()
});
