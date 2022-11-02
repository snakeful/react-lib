import React from 'react';

export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {

}

const NgmInput: React.FC<InputProps> = (props: InputProps) => {
  const { children, placeholder } = props
  return (
    <input placeholder={placeholder || ''} {...props}>{children}</input>
  )
}

export default NgmInput;