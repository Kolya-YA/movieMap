import { Navigate } from 'react-router-dom';
import { SignUpForm } from '../components';
import { useUserContext } from '../hooks';


const SignUp = () => {
    const { user } = useUserContext();

    if (user) {
        return <Navigate to="/" replace={true} />
    }

    return (
        <section className='max-w-md mx-auto mb-auto grid gap-4 py-4 px-2 text-main-text'>
            <h1 className="text-2xl text-center font-semibold ">Sign up</h1>
            <p className='text-center text-balance'>
                Sign up to get access to all features of our website.
            </p>
             <SignUpForm />
        </section>
    )
}

export default SignUp;