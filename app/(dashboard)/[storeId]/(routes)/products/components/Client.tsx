"use client"

import { Button } from "@/components/ui/Button"
import Heading from "@/components/ui/Heading"
import { Separator } from "@/components/ui/Separator"
import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"

import { FC } from 'react'
import { ProductColumn, columns } from "./Columns"
import { DataTable } from "@/components/ui/DataTable"
import ApiList from "@/components/ui/ApiList"

interface ProductClientProps {
  data: ProductColumn[];
}

const ProductClient: FC<ProductClientProps> = ({data}) => {

  const router = useRouter()
    const params = useParams()

    return (
        <>
            <div className="flex items-center justify-between">
                <Heading title={`Products (${data.length})`} description="Manage products for your store"/>
                <Button onClick={()=> router.push(`/${params.storeId}/products/new`)}>
                    <Plus className="mr-2 h-4 w-4"/>
                    Add new
                </Button>
            </div>
            <Separator/>
            <DataTable searchKey="label" columns={columns} data={data}/>
            <Heading title="API" description="API calls for Products"/>
            <Separator/>
            <ApiList enitiyName="products" enityIdName="productsId"/>
        </>
    )
}

export default ProductClient