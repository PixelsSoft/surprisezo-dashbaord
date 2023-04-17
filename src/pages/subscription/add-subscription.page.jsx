import ContainerTitle from "../../components/container-title.component";
import CustomContainer from "../../components/custom-container.component";
import CustomFormInput from "../../components/custom-form-input";
import Layout from "../../components/custom-layout.component";
import Header from "../../components/header.component";
import ImageUpload from "../../components/image-upload.component";
import CustomFormSubmitButton from '../../components/custom-form-submit-button.component'


export default function AddSubscription() {
    return (
        <Layout>
            <Header title='Subscription' />
            <CustomContainer>
                <ContainerTitle>Add New Subscription</ContainerTitle>

                <form className="relative">
                    <CustomFormInput placeholder='Subscription Name' />
                    <div className="flex flex-col xl:flex-row xl:space-x-10">
                        <CustomFormInput placeholder='Price For Subscriptions' />
                        <CustomFormInput placeholder='Discount On Package' />
                    </div>
                    <ImageUpload />

                    <div className="text-white space-x-3 flex justify-end pt-10 xl:pt-40"> 
                        <CustomFormSubmitButton color='bg-[#423E3B80]'>Cancel</CustomFormSubmitButton>
                        <CustomFormSubmitButton color='bg-[#5448C8]'>Save</CustomFormSubmitButton>
                    </div>
                </form>
            </CustomContainer>
        </Layout>
    )
}