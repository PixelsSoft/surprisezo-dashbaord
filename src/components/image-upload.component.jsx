export default function ImageUpload() {
    return (
        <div className="flex xl:absolute xl:right-10 xl:top-0 flex-col items-center border-dotted rounded-2xl p-4 border-2 border-[#5448C8]">
            <img src={require('../assets/icons/camera.png')} alt='' />
            <span className="text-xs mt-10 text-[#0000004D]">Add An Drop Image Here</span>
        </div>
    )
}