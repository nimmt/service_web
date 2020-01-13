import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Form, { TextInput } from './index';

it('renders correctly', () => {
  const tree = ReactTestRenderer
    .create(
      <Form onSubmit={jest.fn()}>
        <TextInput
          name="name"
          register={jest.fn()}
          required
        />
      </Form>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
});
