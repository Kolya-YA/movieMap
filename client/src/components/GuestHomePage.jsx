import { Link } from 'react-router-dom';

const GuestHomePage = () => {

    return (
        <>
            <h1>Guest Home page</h1>
            <Link
                to='login'
                className='py-1 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75'
            >
                Login to take full access to our services
            </Link>
        </>
    );
}

export default GuestHomePage;