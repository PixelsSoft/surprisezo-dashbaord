import { Link } from 'react-router-dom'

export default function Menu() {
    const menuItems = [
        {
            name: 'Dashboard',
            icon: require('../assets/icons/dashboard.png'),
            to: '/dashboard'
        },
        {
            name: 'Gifts',
            icon: require('../assets/icons/gift.png'),
            to: '/gifts'
        },
        {
            name: 'Discount Coupon',
            icon: require('../assets/icons/discount-coupan.png'),
            to: '/discount-coupon'
        },
        {
            name: 'Quotations',
            icon: require('../assets/icons/quotation.png'),
            to: '/quotation'
        },
        {
            name: 'Users',
            icon: require('../assets/icons/user.png'),
            to: '/users'
        },
        {
            name: 'Subscriptions',
            icon: require('../assets/icons/subscription.png'),
            to: '/subscriptions'
        },
        {
            name: 'Settings',
            icon: require('../assets/icons/settings.png'),
            to: '/settings'
        }
    ]
    return (
        <div className='h-screen p-4 md:p-8 w-[250px] md:w-fit font-lato fixed'>
            <div className='bg-[#5448C8] w-11/12 md:w-[280px] flex flex-col justify-evenly h-full items-center text-white rounded-[35px]'>
                <h1 className='font-spicyrice text-3xl md:text-4xl lg:text-5xl'>Menu</h1>
                <div className='w-full flex flex-col h-2/4 justify-between items-center'>
                    {
                        menuItems.map(item => (
                            <Link to={item.to}>
                                <div className='flex items-center w-[150px] md:w-[200px] space-x-4 font-bold'>
                                    <img src={item.icon} alt='' />
                                    <h3 className='text-xs md:text-base'>{item.name}</h3>
                                </div>
                            </Link>
                        ))
                    }
                </div>
                <button className='bg-white rounded-[20px] text-black w-40 md:w-52 py-4'>Logout</button>
            </div>
        </div>
    )
}