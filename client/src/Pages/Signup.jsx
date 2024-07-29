import { SignUpForm } from '../components';

const SignUp = () => {

    return (
        <section className='grid gap-8 py-8 px-4 text-white'>

            <h1 className="text-2xl text-center font-semibold ">Sign up</h1>
            <p className='text-center text-balance'>
                Sign up to get access to all features of our website.
            </p>
             <SignUpForm />
        </section>
    )
}

export default SignUp;