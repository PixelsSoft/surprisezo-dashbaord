import CustomInput from '../components/custom-input.component';
import CustomButton from '../components/custom-button.component';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className='flex w-full h-screen font-lato'>
            <form className='space-y-8 w-full lg:w-1/2 flex flex-col items-center justify-center'>
                <h1 className='text-[75px] font-spicyrice'>Login</h1>
                <CustomInput labelText='Username' />
                <CustomInput labelText='Password' type='password' />

                <div className='flex justify-between w-[355px]'>
                    <div>
                        <input type='checkbox' />
                        <label className='pl-2 text-[14px]'>Remember Me</label>
                    </div>
                    <span className='text-[14px] text-[#5448C8]'>Forgot Password?</span>
                </div>

                <Link to='/dashboard'>
                    <CustomButton>Login</CustomButton>
                </Link>
            </form>
            <div className='hidden items-center justify-center lg:flex lg:w-1/2'>
                <img src={require( '../assets/images/login.png' )} className='w-[500px]' alt='' />
            </div>
        </div>
    )
}