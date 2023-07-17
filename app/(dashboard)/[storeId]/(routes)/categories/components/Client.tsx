"use client"

import Heading from "@/components/ui/Heading"
import { Separator } from "@/components/ui/Separator"
import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"

import { FC } from 'react'
import { CategoryColumn, columns } from "./Columns"
import { DataTable } from "@/components/ui/DataTable"
import ApiList from "@/components/ui/ApiList"
import { Button } from "@/components/ui/Button"

interface CategoryClientProps {
  data: CategoryColumn[];
}

const CategoryClient: FC<CategoryClientProps> = ({data}) => {

  const router = useRouter()
    const params = useParams()

    return (
        <>
            <div className="flex items-center justify-between">
                <Heading title={`Categories (${data.length})`} description="Manage categories for your store"/>
                <Button onClick={()=> router.push(`/${params.storeId}/categories/new`)}>
                    <Plus className="mr-2 h-4 w-4"/>
                    Add new
                </Button>
            </div>
            <Separator/>
            <DataTable searchKey="name" columns={columns} data={data}/>
            <Heading title="API" description="API calls for Categories"/>
            <Separator/>
            <ApiList enitiyName="categories" enityIdName="categoryId"/>
        </>
    )
}

export default CategoryClient
