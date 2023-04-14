export default function Header({title}) {
    return (
        <div className='flex bg-[#D9D9D933]  items-center h-[103px] justify-between px-[27px] font-lato rounded-[30px]'>
            <h1 className='font-spicyrice text-[35px] w-3/4 flex-1'>{title}</h1>
            <div className='flex justify-between space-x-[17px]'>
                <div className='flex relative bg-[#D9D9D9] p-[15px] rounded-[14px] w-[65px]'>
                    <img src={require('../assets/icons/notification.png')} />
                    <img src={require('../assets/icons/notification-circle.png')} className='absolute -top-1 -right-1'/>
                </div>

                <div className='flex justify-between items-center w-[187px] ring-1 ring-[#FF2E00] rounded-[20px] p-[13px]'>
                    <img src={require('../assets/images/user-profile-pic.png')} width={40} height={40} />
                    <span>Hi Admin!</span>
                    <img src={require('../assets/icons/user-menu-toggle.png')} className='object-contain' />
                </div>
            </div>
        </div>
    )
}