import Header from "../components/header.component";
import Layout from "../components/layout.component";
import CustomTable from "../components/custom-table.component";
import { useState, useEffect } from "react";
import { discountInformation } from "../config/columns";
import {discountData} from '../config/sample-data'

export default function Discount() {
    const [data, setData] = useState(discountData)
    const [loading, setLoading] = useState(false)
    const [perPage, setPerPage] = useState(10)
    return (
        <Layout>
            <Header title='Discount' />
            <CustomTable title='Discount Information' columns={discountInformation} data={data} perPage={perPage} loading={loading} />
        </Layout>
    )
} 