"use client"

import Heading from "@/components/ui/Heading"
import { Separator } from "@/components/ui/Separator"
import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { FC } from 'react'
import { BillboardColumn, columns } from "./Columns"
import { DataTable } from "@/components/ui/DataTable"
import ApiList from "@/components/ui/ApiList"
import { Button } from "@/components/ui/button"

interface ClientProps {
  data: BillboardColumn[];
}

const BillboardClient: FC<ClientProps> = ({data}) => {

  const router = useRouter()
    const params = useParams()

    return (
        <>
            <div className="flex items-center justify-between">
                <Heading title={`Billboards (${data.length})`} description="Manage billboards for your store"/>
                <Button onClick={()=> router.push(`/${params.storeId}/billboards/new`)}>
                    <Plus className="mr-2 h-4 w-4"/>
                    Add new
                </Button>
            </div>
            <Separator/>
            <DataTable searchKey="label" columns={columns} data={data}/>
            <Heading title="API" description="API calls for Billboards"/>
            <Separator/>
            <ApiList enitiyName="billboards" enityIdName="billboardsId"/>
        </>
    )
}

export default BillboardClient
