import Header from '../../components/header.component'
import Layout from '../../components/custom-layout.component'
import { Link } from 'react-router-dom'
import CustomTable from '../../components/custom-table.component'
import { discountInformation } from '../../config/columns'
import { discountData } from '../../config/sample-data'

export default function Discount() {
    return (
        <Layout>
            <Header title='Discount' />
            <div className='relative'>
                <CustomTable title='Discount Information' columns={discountInformation} data={discountData} />
                <Link to='/add-discount'>
                    <button className='ring-1 text-xs absolute right-5 top-5 ring-[#5448C8] px-3 py-2 flex items-center rounded-md text-[#5448C8]'>
                        <img className='mr-2' src={require('../../assets/icons/add.png')} alt='' />
                        Add New
                    </button>
                </Link>
            </div>
        </Layout>
    )
}