import { UserProvider } from '../contexts';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import { Header, Footer } from '../components';

const MainLayout = () => {
    return (
        <UserProvider>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            <ToastContainer />
        </UserProvider>
    );
}

export default MainLayout;