import React from 'react'
import { AwsS3 } from 'services/AwsS3/AwsS3'

export const Home: React.FC<any> = () => {
  return (
    <>
      <h1>There's no place like 127.0.0.1</h1>
      <AwsS3></AwsS3>
    </>
  )
}
