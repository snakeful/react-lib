import React from 'react'
import { Form, FormCheckProps } from 'react-bootstrap'

export interface CheckProps extends FormCheckProps {
  required?: boolean
}

export const Check: React.FC<CheckProps> = (props: CheckProps) => {
  const { className, required } = props
  return (
    <Form.Check {...props} className={`${required && 'ngm-required'} ${className}`}></Form.Check>
  )
}
