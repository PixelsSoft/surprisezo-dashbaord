export default function ButtonLeftIcon({children, iconSrc}) {
    return (
        <button className='relative bg-white w-[251px] h-[68px] rounded-[20px] text-[20px] font-[900] flex justify-center items-center'>
            <img src={iconSrc} className='absolute left-[21px]' />
            {children}
        </button>
    )
}