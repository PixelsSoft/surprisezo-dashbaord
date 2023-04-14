import MenuItem from '../components/menu-item.component'
import ButtonLeftIcon from './button-left-icon.component'
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
            name: 'Discount Coupons',
            icon: require('../assets/icons/discount-coupan.png'),
            to: '/discount'
        },
        {
            name: 'Quotation',
            icon: require('../assets/icons/quotation.png'),
            to: '/quotation'
        },
        {
            name: 'User',
            icon: require('../assets/icons/user.png'),
            to: '/users'
        },
        {
            name: 'Settings',
            icon: require('../assets/icons/settings.png'),
            to: '/settings'
        },
    ]
    return (
        <div className='w-fit z-10 h-screen flex flex-col justify-center items-center p-[27px] font-lato'>
            <div className='bg-[#5448C8] w-[294px] h-[95%] rounded-[35px] flex flex-col items-center justify-between py-8'>
                <h2 className='font-spicyrice text-[45px] text-white'>Menu</h2>
                <div className='space-y-[45px]'>
                    {menuItems.map(item => (
                        <MenuItem item={item} />
                    ))}
                </div>
                <ButtonLeftIcon iconSrc={require('../assets/icons/button-back.png')}>Logout</ButtonLeftIcon>
            </div>
        </div>
    )
}