"use client"

import { Button } from "@/components/ui/Button"
import Heading from "@/components/ui/Heading"
import { Separator } from "@/components/ui/Separator"
import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"

import { FC } from 'react'
import { ColorColumn, columns } from "./Columns"
import { DataTable } from "@/components/ui/DataTable"
import ApiList from "@/components/ui/ApiList"

interface ColorsClientProps {
  data: ColorColumn[];
}

const ColorsClient: FC<ColorsClientProps> = ({data}) => {

  const router = useRouter()
    const params = useParams()

    return (
        <>
            <div className="flex items-center justify-between">
                <Heading title={`Colors (${data.length})`} description="Manage colrs for your store"/>
                <Button onClick={()=> router.push(`/${params.storeId}/colors/new`)}>
                    <Plus className="mr-2 h-4 w-4"/>
                    Add new
                </Button>
            </div>
            <Separator/>
            <DataTable searchKey="name" columns={columns} data={data}/>
            <Heading title="API" description="API calls for COlors"/>
            <Separator/>
            <ApiList enitiyName="colors" enityIdName="colorId"/>
        </>
    )
}

export default ColorsClient
