import React from 'react';

interface IPorps {
  value: string;
};

export const SubmitButton: React.FC<IPorps> = ({ value }) => (
  <input type="submit" value={value} />
);
