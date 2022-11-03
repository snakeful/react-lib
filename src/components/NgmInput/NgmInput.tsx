import React from 'react';
import { Form, FormControlProps } from 'react-bootstrap';

export interface InputProps extends FormControlProps { }

const NgmInput: React.FC<InputProps> = (props: InputProps) => {
  const { children, placeholder } = props
  return (
    <Form.Control placeholder={placeholder || ''} {...props}>{children}</Form.Control>
  )
};

export default NgmInput;