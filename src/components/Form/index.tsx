import React from 'react';

interface IFormProps {
  onSubmit(data: any): any;
}

interface ITextInputProps {
  name: string;
  register: any;
  required?: boolean;
}

const Form: React.FC<IFormProps> = ({ onSubmit, children }) => (
  <form onSubmit={onSubmit}>
    {children}
  </form>
);

export const TextInput: React.FC<ITextInputProps> = ({
  name,
  register,
  required = false
}) => (
  <input
    type="text"
    name={name}
    ref={register({
      required: required
    })}
  />
);

export default Form;
