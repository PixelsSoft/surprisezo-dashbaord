import CustomTable from "../components/custom-table.component";
import Header from "../components/header.component";
import Layout from "../components/layout.component";
import {usersData} from '../config/sample-data'
import { useState, useEffect } from "react";
import { usersInformation } from "../config/columns";

export default function Users() {
    const [data, setData] = useState(usersData)
    const [perPage, setPerPage] = useState(10)
    return (
        <Layout>
            <Header title='Users' />
            <CustomTable data={data} columns={usersInformation} perPage={perPage} title='User Information' />
        </Layout >
    )
}