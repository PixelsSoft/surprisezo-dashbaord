export default function StatCard({ text, backgroundColor, iconBg, iconSrc, title }) {
    console.log(backgroundColor)
    return (
        <div className={`${backgroundColor} m-2 font-lato relative text-white w-[262px] rounded-[20px] h-[149px] flex flex-col p-[15px] justify-between`}>
            <div className='flex justify-between items-center'>
                <span className='text-[20px] text-[900]'>{text}</span>
                <div className={`${iconBg} absolute right-0 top-0 w-[95px] height-[60px] flex justify-center rounded-tr-[20px] py-[14px] rounded-bl-[20px]`}>
                    <img src={iconSrc} />
                </div>
            </div>

            <h5 className='text-[20px]'>{title}</h5>
        </div>
    )
}