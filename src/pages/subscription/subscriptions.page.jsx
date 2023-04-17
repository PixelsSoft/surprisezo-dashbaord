import Layout from "../../components/custom-layout.component"
import CustomTable from "../../components/custom-table.component"
import Header from "../../components/header.component"
import { Link } from "react-router-dom"

export default function Subscriptions() {
    return (
        <Layout>
            <Header title='Subscriptions' />
            <div className="relative">
                <Link to='/add-subscription'>
                    <button className='ring-1 absolute right-3 top-4 text-xs z-10 ring-[#5448C8] px-3 py-2 flex items-center rounded-md text-[#5448C8]'>
                        <img className='mr-2' src={require('../../assets/icons/add.png')} alt='' />
                        Add New
                    </button>
                </Link>
                <CustomTable title='Subscription Information' />
            </div>
        </Layout>
    )
}