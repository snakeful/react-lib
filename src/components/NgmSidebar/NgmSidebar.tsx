import React from 'react';

export interface SidebarProps extends React.ObjectHTMLAttributes<any> { }

export const NgmSidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
  const { children } = props;
  return (
    <div className="NgmSidebar">{children}</div>
  )
}