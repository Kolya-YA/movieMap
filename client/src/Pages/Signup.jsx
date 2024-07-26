import { SignUpForm } from '../components';

const SignUp = () => {

    return (
        <>
        <div className='flex flex-col items-center text-white'>

            <h1 className="text-lg font-semibold p-8">Sign up</h1>
            <p className='px-10 text-center'>
                Sign up to get access to all features of our website.
            </p>
             <SignUpForm />
        </div>
        </>
    )
}

export default SignUp;