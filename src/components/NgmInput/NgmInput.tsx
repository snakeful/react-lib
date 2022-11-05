import React from 'react';
import { FloatingLabel, Form, FormControlProps } from 'react-bootstrap';

export interface InputProps extends FormControlProps {
  label?: string;
  required?: boolean;
}

export const NgmInput: React.FC<InputProps> = (props: InputProps) => {
  const { children, label, placeholder, required } = props
  return (
    <FloatingLabel label={label || ''}>
      <Form.Control placeholder={placeholder || label} {...props} required={required}>{children}</Form.Control>
    </FloatingLabel>
  )
};