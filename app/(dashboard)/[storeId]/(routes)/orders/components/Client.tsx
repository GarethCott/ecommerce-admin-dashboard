"use client"


import Heading from "@/components/ui/Heading"
import { Separator } from "@/components/ui/Separator"

import { FC } from 'react'
import { OrderColumn, columns } from "./Columns"
import { DataTable } from "@/components/ui/DataTable"

interface OrderClientProps {
  data: OrderColumn[];
}

const OrderClient: FC<OrderClientProps> = ({data}) => {

    return (
        <>
            <Heading title={`Orders (${data.length})`} description="Manage orders for your store"/>
            <Separator/>
            <DataTable searchKey="products" columns={columns} data={data}/>
        </>
    )
}

export default OrderClient
