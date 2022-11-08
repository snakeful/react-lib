import React from 'react'

export const NotFound: React.FC<any> = (props: any) => {
  const { children } = props
  return (
    <div>Page Not Found {children}</div>
  )
}
