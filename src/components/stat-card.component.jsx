export default function StatCard() {
    return (
        <div style={{ boxShadow: '5px 10px 16px rgba(0, 0, 0, 0.1)' }} className="bg-[#E3C52480] m-2 font-bold text-white space-y-10 relative flex flex-col w-full md:w-40 lg:w-60 p-4 rounded-[20px]">
            <div className="flex justify-between">
                <span>2.0k</span>
                <img src={require('../assets/icons/usertick.png')} alt='' className="bg-[#826F0D] absolute top-0 right-0 px-4 py-2 rounded-bl-[20px]" />
            </div>
            <span>Total Active Users</span>
        </div>
    )
}