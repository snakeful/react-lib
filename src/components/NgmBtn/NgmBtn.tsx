import React from 'react';
import './NgmBtn.css';

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  backgroundColor?: string;
  color?: string;
}

const NgmBtn: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { children, backgroundColor, color, style } = props;
  const customStyle: React.CSSProperties = style || {};

  customStyle.backgroundColor = backgroundColor ?? style?.backgroundColor;
  customStyle.color = color ?? style?.color;
  return (
    <button className="NgmBtn" style={customStyle} {...props}>{children}</button>
  );
}

export default NgmBtn;