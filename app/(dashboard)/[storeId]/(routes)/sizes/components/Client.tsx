"use client"

import Heading from "@/components/ui/Heading"
import { Separator } from "@/components/ui/Separator"
import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"

import { FC } from 'react'
import { SizeColumn, columns } from "./Columns"
import { DataTable } from "@/components/ui/DataTable"
import ApiList from "@/components/ui/ApiList"
import { Button } from "@/components/ui/button"

interface SizesClientProps {
  data: SizeColumn[];
}

const SizesClient: FC<SizesClientProps> = ({data}) => {

  const router = useRouter()
    const params = useParams()

    return (
        <>
            <div className="flex items-center justify-between">
                <Heading title={`Sizes (${data.length})`} description="Manage sizes for your store"/>
                <Button onClick={()=> router.push(`/${params.storeId}/sizes/new`)}>
                    <Plus className="mr-2 h-4 w-4"/>
                    Add new
                </Button>
            </div>
            <Separator/>
            <DataTable searchKey="name" columns={columns} data={data}/>
            <Heading title="API" description="API calls for Sizes"/>
            <Separator/>
            <ApiList enitiyName="sizes" enityIdName="sizeId"/>
        </>
    )
}

export default SizesClient
