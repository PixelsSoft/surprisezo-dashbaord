import Layout from "../../components/custom-layout.component"
import CustomTable from "../../components/custom-table.component"
import Header from "../../components/header.component"
import {usersInformation } from '../../config/columns'
import {usersData} from '../../config/sample-data'

export default function User() {
    return (
        <Layout>
            <Header title='User' />
            <CustomTable title='User Informations' columns={usersInformation} data={usersData}/>
        </Layout>
    )
}