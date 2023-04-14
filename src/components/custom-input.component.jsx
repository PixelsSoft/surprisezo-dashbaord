export default function CustomInput({ labelText, ...otherProps }) {
    return (
        <div class="relative font-lato">
            <label className="absolute bg-white -top-3 left-3.5 px-[4px] font-bold">{labelText}</label>
            <input className="border-2 border-[#FF2E00] w-[358px] h-[55px] rounded-[15px] p-2 focus:outline-none" />
        </div>
    )
}