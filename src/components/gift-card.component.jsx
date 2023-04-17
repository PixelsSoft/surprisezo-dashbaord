export default function GiftCard() {
    return (
        <div className='rounded-[20px] w-52 p-4 mx-2 my-4' style={{boxShadow: '10px 20px 30px 20px rgba(0, 0, 0, 0.16)'}}>
            <div className='flex flex-col items-center space-y-3'>
                <img src={require('../assets/images/Netflix.png')} alt='' />
                <hr class="h-px bg-gray-200 w-full border-0" />
                <span className='text-center text-sm'>Monthly Netflix Free Subscription</span>
            </div>
            <div className='flex items-center justify-between'>
                <span>Price:</span>
                <span>50$</span>
            </div>
        </div>
    )
}