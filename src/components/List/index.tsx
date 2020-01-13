import React from 'react';

const List: React.FC = ({ children }) => (
  <ul>{children}</ul>
);

export const Item: React.FC = ({ children }) => (
  <li>{children}</li>
);

export default List;
