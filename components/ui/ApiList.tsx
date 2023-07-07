"use client"
import useOrigin from '@/hooks/useOrigin'
import { useParams } from 'next/navigation'
import { FC } from 'react'
import ApiAlert from './ApiAlert'

interface ApiListProps {
  enitiyName: string
  enityIdName: string
}

const ApiList: FC<ApiListProps> = ({
    enitiyName,
    enityIdName
}) => {
    const params = useParams()
    const origin = useOrigin()

    const baseUrl = `${origin}/api/${params.storeId}` 

  return (
    <>
        <ApiAlert 
        title='GET' 
        variant='public'
        description={`${baseUrl}/${enitiyName}`}
        />
        <ApiAlert 
        title='GET' 
        variant='public'
        description={`${baseUrl}/${enitiyName}/{${enityIdName}}`}
        />
        <ApiAlert 
        title='POST' 
        variant='admin'
        description={`${baseUrl}/${enitiyName}`}
        />
        <ApiAlert 
        title='PATCH' 
        variant='admin'
        description={`${baseUrl}/${enitiyName}/{${enityIdName}}`}
        />
        <ApiAlert 
        title='DELETE' 
        variant='admin'
        description={`${baseUrl}/${enitiyName}/{${enityIdName}}`}
        />
    </>
  )
}

export default ApiList