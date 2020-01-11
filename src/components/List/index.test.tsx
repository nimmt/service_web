import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import List, { Item } from './index';

it('renders correctly', () => {
  const tree = ReactTestRenderer
    .create(
      <List>
        <Item>テキスト</Item>
      </List>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
});
