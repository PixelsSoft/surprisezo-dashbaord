export default function VirtualGiftCard() {
    return (
        <div className="flex flex-col w-[244px] shadow-2xl rounded-[20px] p-[23px] mr-2 my-2">
            <div className="flex flex-col items-center space-y-2">
                <img src={require('../assets/images/headphone.png')} />
                <hr class="h-px bg-gray-200 w-full border-0" />
                <h5>Headphone</h5>
            </div>
            <div className="flex justify-between mt-[13px]">
                <span className="text-[20px]">Price</span>
                <span className="text-[20px]">$50</span>
            </div>
        </div>
    )
}