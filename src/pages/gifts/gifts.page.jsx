import Layout from '../../components/custom-layout.component'
import Header from '../../components/header.component'
import GiftCard from '../../components/gift-card.component'
import { Link } from 'react-router-dom'
import CustomContainer from '../../components/custom-container.component'

export default function Gifts() {
    return (
        <Layout>
            <Header title='Gifts' />
            <CustomContainer>
                <div className='flex justify-between items-center'>
                    <div className='space-x-8'>
                        <span className='bg-[#5448C8] text-white px-10 py-4 rounded-[20px]'>Virtual</span>
                        <span>Physical</span>
                    </div>
                    <Link to='/add-gift'>
                        <button className='ring-1 ring-[#5448C8] px-3 py-2 text-xs flex items-center rounded-md text-[#5448C8]'>
                            <img className='mr-2' src={require('../../assets/icons/add.png')} alt='' />
                            Add New
                        </button>
                    </Link>
                </div>

                <div className='py-4 flex flex-wrap justify-center md:justify-between'>
                    <GiftCard />
                    <GiftCard />
                    <GiftCard />
                    <GiftCard />
                    <GiftCard />
                </div>
            </CustomContainer>
        </Layout>
    )
}