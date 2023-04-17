import Layout from "../../components/custom-layout.component";
import Header from "../../components/header.component";
import CustomContainer from '../../components/custom-container.component';
import ContainerTitle from '../../components/container-title.component'
import CustomFormInput from '../../components/custom-form-input';
import CustomFormSubmitButton from '../../components/custom-form-submit-button.component'

export default function AddDiscount() {
    return (
        <Layout>
            <Header title='Discount' />
            <CustomContainer>
                <ContainerTitle>Add New Discount</ContainerTitle>
                <form className="flex md:justify-evenly lg:justify-between flex-wrap mt-2 lg:mt-6">
                    <CustomFormInput placeholder='Website Name' />
                    <CustomFormInput placeholder='Start Date' />
                    <CustomFormInput placeholder='End Date' />
                    <CustomFormInput placeholder='For Free' />
                    <CustomFormInput placeholder='For Gold' />
                    <CustomFormInput placeholder='For Premium' />
                </form>

                <div className="flex justify-end mt-10 lg:mt-40 xl:mt-48 space-x-4"> 
                    <CustomFormSubmitButton color='bg-[#423E3B80]'>Cancel</CustomFormSubmitButton>
                    <CustomFormSubmitButton color='bg-[#5448C8]'>Save</CustomFormSubmitButton>
                </div>
            </CustomContainer>
        </Layout>
    )
}