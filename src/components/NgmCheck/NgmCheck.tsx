import React from 'react'
import { Form, FormCheckProps } from 'react-bootstrap'

export interface CheckProps extends FormCheckProps {
  required?: boolean
}

export const NgmCheck: React.FC<CheckProps> = (props: CheckProps) => {
  const { className, label, required } = props
  return (
    <Form.Check label={label} {...props} className={`${required && 'ngm-required'} ${className}`}></Form.Check>
  )
}
