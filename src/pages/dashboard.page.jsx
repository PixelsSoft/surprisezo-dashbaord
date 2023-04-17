import Layout from '../components/custom-layout.component'
import StatCard from '../components/stat-card.component'
import CustomTable from '../components/custom-table.component'
import { usersData } from '../config/sample-data'
import { usersInformation } from '../config/columns'
import Header from '../components/header.component'

export default function Dashboard() {
    return (
        <Layout>
            <Header title='Dashboard' />
            <div className="flex flex-wrap">
                <StatCard />
                <StatCard />
                <StatCard />
                <StatCard />
                <StatCard />
            </div>
            <CustomTable title='Users Information' data={usersData} columns={usersInformation} />
        </Layout>
    )
}