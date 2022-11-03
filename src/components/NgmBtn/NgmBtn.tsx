import React from 'react';
import { Button, ButtonProps } from 'react-bootstrap';
import './NgmBtn.css';

export interface IButtonProps extends ButtonProps {
}

const NgmBtn: React.FC<IButtonProps> = (props: IButtonProps) => {
  const { children, variant = 'primary' } = props;
  return (
    <Button variant={variant} {...props}>{children}</Button>
  );
};

export default NgmBtn;