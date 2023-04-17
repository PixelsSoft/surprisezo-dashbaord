import CustomContainer from "../../components/custom-container.component";
import Layout from "../../components/custom-layout.component";
import Header from "../../components/header.component";
import CustomFormInput from '../../components/custom-form-input'
import CustomFormSubmitButton from "../../components/custom-form-submit-button.component";
import ContainerTitle from '../../components/container-title.component'
import ImageUpload from "../../components/image-upload.component";

export default function AddGift() {
    return (
        <Layout>
            <Header title='Gifts' />
            <CustomContainer otherStyles=''>
                <ContainerTitle >Add New Gifts</ContainerTitle>
                <form className="flex flex-col relative">
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div className="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-6">
                            <div className="relative flex items-center w-full lg:w-fit">
                                <CustomFormInput placeholder='Gift Category' />
                                <img src={require('../../assets/icons/down-arrow.png')} alt='' className="absolute right-4" />
                            </div>
                            <div className="hidden lg:flex flex-col">
                                <span className="text-[#5448C8] font-bold">Example</span>
                                <span className="text-[#423E3B80] text-sm">Headphones, Perfume, Make Up & Furniture</span>
                            </div>
                        </div>
                        <ImageUpload />
                    </div>
                    <CustomFormInput placeholder='Size' />
                    <CustomFormInput placeholder='Company Name' />
                    <CustomFormInput placeholder='Quantity' />
                    <CustomFormInput placeholder='Announce Date' />
                    <CustomFormInput placeholder='Winner Announce Screen Text...' />
                    <div className="text-white space-x-3 flex justify-end"> 
                        <CustomFormSubmitButton color='bg-[#423E3B80]'>Cancel</CustomFormSubmitButton>
                        <CustomFormSubmitButton color='bg-[#5448C8]'>Save</CustomFormSubmitButton>
                    </div>
                </form>
            </CustomContainer>
        </Layout>
    )
}