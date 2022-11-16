import AWS from 'aws-sdk'
import { isNil } from 'lodash'
import React, { useState } from 'react'
import { Button } from '../../components'

interface PageState {
  page: number
  next: string | undefined
}

export const AwsS3: React.FC<any> = () => {
  const [filename, setFilename] = useState('')
  const handleChangeFilename = ({ target }: any) => setFilename(target?.value)
  const [files, setFiles] = useState([])
  const [directory, setDirectory] = useState('')
  const handleChangeDirectory = ({ target }: any) => setDirectory(target?.value)
  const [message, setMessage] = useState('')
  const [page, setPage] = useState(0)
  const [next, setNext] = useState(false)
  const initialPage: PageState = { page: 0, next: undefined }
  const [pages, setPages] = useState([initialPage])
  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState({} as File)
  const bucketName = 'enigmabucket'
  AWS.config.credentials = {
    accessKeyId: 'AKIA4UPRZUZSOVRMSHFT',
    secretAccessKey: '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'
  }
  AWS.config.update({ region: 'us-east-1' })
  const s3 = new AWS.S3()
  const handleListFiles = (page: number, reset: boolean = false) => (() => {
    if (reset) {
      setPage(0)
      setNext(false)
      setPages([initialPage])
      listFiles(page, [initialPage])
    } else {
      setPage(page)
      listFiles(page, pages)
    }
  })
  const listFiles = async (page: number, pages: PageState[]) => {
    setLoading(true)
    const bucketParams = {
      Bucket: bucketName,
      Prefix: `${directory ? directory + '/' : ''}`,
      MaxKeys: 2,
      ContinuationToken: pages[page].next
    }
    const command = s3.listObjectsV2(bucketParams)
    try {
      const data = await command.promise()
      setMessage('Files loaded')
      setFiles(data.Contents as any)
      setNext(!!data.IsTruncated)
      if (data.IsTruncated && isNil(pages[page + 1])) {
        setPages([...pages, { page: pages.length, next: data.NextContinuationToken }])
        console.log([...pages, { page: pages.length, next: data.NextContinuationToken }])
      }
    } catch (err) {
      console.log('Error', err)
    } finally {
      setLoading(false)
    }
  }

  const handleOnChangeFile = ({ target }: any) => setFile(target.files[0])
  const handleUploadFile = async () => {
    setLoading(true)
    try {
      await uploadFile(file)
    } catch (ex) {
      console.log('There was an error uploading your image: ', ex)
    } finally {
      setLoading(false)
    }
  }
  const uploadFile = async (file: File) => {
    const upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: bucketName,
        Key: `${directory ? directory + '/' : ''}${filename || file.name}`,
        Body: file
      }
    })
    const response = await upload.promise()
    setMessage('File uploaded')
    handleListFiles(0, true)()
    setFile({} as File)
    console.log(response)
    //   // Load for preview
    //   // const reader = new FileReader()
    //   // reader.onload = function () {
    //   //   const arrayBuffer = this.result as ArrayBuffer
    //   //   const array = new Uint8Array(arrayBuffer)
    //   //   console.log(String(array))

    //   // }
    //   // console.log(target.files[0])
    //   // reader.readAsArrayBuffer(target.files[0])
  }

  const handleDelete = (filename: string) => (() => deleteFile(filename))

  const deleteFile = async (filename: string) => {
    setLoading(true)
    const params = {
      Bucket: bucketName,
      Key: filename
    }
    const command = s3.deleteObject(params)
    try {
      await command.promise()
      setMessage('Successfully deleted image.')
    } catch (ex) {
      return console.log('There was an error deleting your image: ', ex)
    } finally {
      handleListFiles(0, true)()
      setLoading(false)
    }
  }

  return (
    <>
      <Button key='list-files' onClick={handleListFiles(0, true)}>List Files</Button>
      <Button onClick={handleListFiles(page - 1)} disabled={loading || page === 0}>Previous</Button>
      <Button onClick={handleListFiles(page + 1)} disabled={loading || !next}>Next</Button>
      <div>{message}</div>
      <input key='dir' type='text' value={directory} onChange={handleChangeDirectory} />
      <input key='filename' type='text' value={filename} onChange={handleChangeFilename} />
      <label key='labelFile' htmlFor='myfile'>Select a file:</label>
      <input type='file' key='myfile' name='myfile' onChange={handleOnChangeFile} />
      <Button onClick={handleUploadFile} disabled={isNil(file.name)}>Upload</Button>
      {file.name}-{isNil(file.name)}
      <ul>
        {files.map((file: any, index: number, _files: any[]) => (
          <li key={`${index}`}>
            <div key={`file${index}`}>{file.Key}
            </div>
            <Button key={`btn${index}`} color='red' onClick={handleDelete(file.Key)}>Delete</Button>
          </li>)
        )}</ul>
    </>
  )
}