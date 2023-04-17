import ContainerTitle from '../components/container-title.component'
import CustomContainer from '../components/custom-container.component'
import CustomFormSubmitButton from '../components/custom-form-submit-button.component'
import Layout from '../components/custom-layout.component'
import Header from '../components/header.component'

export default function Quotations() {
    return (
        <Layout>
            <Header title='Quotation' />

            <CustomContainer otherStyles='space-y-8'>
                <ContainerTitle>Write Quote Here</ContainerTitle>
                <div className='relative'>
                    <img src={require('../assets/icons/quoteup.png')} alt='' className='absolute top-3 left-4' />
                    <input
                        className='w-full text-md md:text-2xl xl:text-3xl py-14 px-4 rounded-lg'
                        style={{ background: 'rgba(84, 72, 200, 0.13)' }}
                        placeholder='Write Quote Here'
                    />
                    <img src={require('../assets/icons/quotedown.png')} alt='' className='absolute bottom-3 right-4' />
                </div>

                <input
                    className='w-fit rounded-lg p-3'
                    style={{ background: 'rgba(84, 72, 200, 0.13)' }}
                    placeholder='Write Author Name'
                />

                <div className="text-white space-x-3 pt-14 xl:pt-20 flex justify-end">
                    <CustomFormSubmitButton color='bg-[#423E3B80]'>Cancel</CustomFormSubmitButton>
                    <CustomFormSubmitButton color='bg-[#5448C8]'>Save</CustomFormSubmitButton>
                </div>
            </CustomContainer>
        </Layout>
    )
}