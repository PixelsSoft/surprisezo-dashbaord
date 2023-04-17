export default function Header({title}) {
    return (
        <div className="bg-[#D9D9D933] w-full flex mb-6 justify-between rounded-[30px] p-4 items-center">
            <h1 className='font-spicyrice text-2xl md:text-3xl'>{title}</h1>
            <div className='flex items-center space-x-6'>
                <div className='relative w-fit bg-[#D9D9D9] hidden lg:flex p-2 rounded-[14px]'>
                    <img src={require('../assets/icons/notification.png')} alt='' />
                    <img className='absolute -top-2 -right-2' src={require('../assets/icons/notification-circle.png')}  alt=''/>
                </div>

                <div className='flex items-center w-fit space-x-2  md:w-44 ring-1 ring-[#FF2E00] p-2 rounded-[20px] justify-between'>
                    <img src={require('../assets/images/user-profile-pic.png')} alt=''/>
                    <span className='text-xs md:text-base'>Hi Admin!</span>
                    <img src={require('../assets/icons/user-menu-toggle.png')} alt='' />
                </div>
            </div>
        </div>
    )
}