import CustomInput from '../components/custom-input.component';
import CustomButton from '../components/custom-button.component';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
    return (
        <div className='flex w-full h-screen font-lato'>
            <form className='space-y-8 w-full lg:w-1/2 flex flex-col items-center justify-center'>
                <h1 className='text-[75px] font-spicyrice'>Forgot Password</h1>
                <CustomInput labelText='Email' />
                <Link to='/verify-otp'>
                    <CustomButton>Submit</CustomButton>
                </Link>
            </form>
            <div className='hidden items-center justify-center lg:flex lg:w-1/2'>
                <img src={require( '../assets/images/login.png' )} className='w-[500px]' alt='' />
            </div>
        </div>
    )
}