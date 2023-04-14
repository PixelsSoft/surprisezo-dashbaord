import CustomTable from '../components/custom-table.component'
import { useState, useEffect} from 'react'
import Layout from "../components/layout.component";
import StatCard from "../components/stat-card.component";
import { usersData } from "../config/sample-data";
import Header from '../components/header.component';
import {usersInformation} from '../config/columns'

const statCardItems = [
    {
        text: '2.05k',
        backgroundColor: 'bg-[#E3C52480]',
        iconSrc: require('../assets/icons/usertick.png'),
        iconBg: 'bg-[#826F0D]',
        title: 'Total Active Users'
    },
    {
        text: '',
        backgroundColor: 'bg-[#55B9CF80]',
        iconSrc: require('../assets/icons/userremove.png'),
        iconBg: 'bg-[#55B9CF]',
        title: 'Total Users'
    },
    {
        text: '$2.000000',
        backgroundColor: 'bg-[#1EDB6A5E]',
        iconSrc: require('../assets/icons/moneyreceive.png'),
        iconBg: 'bg-[#15C145]',
        title: 'Total Revenue'
    },
    {
        text: '1200',
        backgroundColor: 'bg-[#FEA82F99]',
        iconSrc: require('../assets/icons/gift.png'),
        iconBg: 'bg-[#FEA82F]',
        title: 'Total Gifts'
    },
    {
        text: '2.05k',
        backgroundColor: 'bg-[#423E3B4D]',
        iconSrc: require('../assets/icons/discount-coupan.png'),
        iconBg: 'bg-[#423E3B]',
        title: 'Discount Coupons'
    },
    {
        text: '2.05k',
        backgroundColor: 'bg-[#423E3B4D]',
        iconSrc: require('../assets/icons/discount-coupan.png'),
        iconBg: 'bg-[#423E3B]',
        title: 'Discount Coupons'
    },
    {
        text: '2.05k',
        backgroundColor: 'bg-[#423E3B4D]',
        iconSrc: require('../assets/icons/discount-coupan.png'),
        iconBg: 'bg-[#423E3B]',
        title: 'Discount Coupons'
    },
]

export default function Dashboard() {
    const [data, setData] = useState(usersData)
    const [loading, setLoading] = useState(false)
    const [perPage, setPerPage] = useState(5)

    return (
        <Layout>
            <Header title='Dashboard' />
            <div className="flex flex-wrap">
                {statCardItems.map(item => (
                    <StatCard title={item.title} backgroundColor={item.backgroundColor} iconBg={item.iconBg} iconSrc={item.iconSrc} text={item.text}/>
                ))}
            </div>
            <CustomTable loading={loading} columns={usersInformation} data={data} title='User Information' perPage={perPage}/>
        </Layout>
    )
}