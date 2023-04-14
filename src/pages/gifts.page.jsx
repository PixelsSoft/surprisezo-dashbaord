import Header from "../components/header.component";
import Layout from "../components/layout.component";
import CustomTable from "../components/custom-table.component";
import { Link } from "react-router-dom";
import NavButton from '../components/nav-button.component'
import CustomOutlineButton from '../components/custom-outline-button.component'
import VirtualGiftCard from '../components/virtual-gift-card.component'

export default function Gifts() {
    return (
        <Layout >
            <Header title='Gifts' />

            <div className="shadow-md pt-[20px] pb-[100px] mt-[31px] rounded-[15px] px-[20px]">
                
                <div className="flex items-center justify-between">
                    <div className="space-x-2">
                        <NavButton>Virtual</NavButton>
                        <NavButton>Physical</NavButton>
                    </div>
                    <CustomOutlineButton>
                        <img src={require('../assets/icons/add.png')} className="mr-2"/>
                        Add New
                    </CustomOutlineButton>
                </div>

                <div className="mt-[70px] flex flex-wrap justify-evenly items-start" >
                    <VirtualGiftCard />
                    <VirtualGiftCard />
                    <VirtualGiftCard />
                    <VirtualGiftCard />
                    <VirtualGiftCard />
                </div>
            </div>
        </Layout>
    )
}