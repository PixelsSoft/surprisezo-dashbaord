export default function CustomButton({ children, ...otherProps }) {
    return (
        <button
            className='bg-[#423E3B] font-spicyrice py-[18px] px-[108px] text-[20px] text-white rounded-[15px]'
            {...otherProps}>
            {children}
        </button>
    )
}