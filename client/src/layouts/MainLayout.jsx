import { UserProvider } from '../contexts';
import { Outlet } from 'react-router-dom';

import { Header, Footer } from '../components';

const MainLayout = () => {
    return (
        <UserProvider>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </UserProvider>
    );
}

export default MainLayout;