import React from 'react'
import { FloatingLabel, Form, FormControlProps } from 'react-bootstrap'

export interface ControlProps extends FormControlProps {
  label?: string
  required?: boolean
}

export const Control: React.FC<ControlProps> = (props: ControlProps) => {
  const { children, label = '', placeholder, required } = props
  return (
    <FloatingLabel label={label} className={`${required && 'ngm-required'}`}>
      <Form.Control placeholder={placeholder || label} required={required} {...props}>{children}</Form.Control>
    </FloatingLabel>
  )
}
