import { UserProvider } from "../contexts";
import { Outlet } from "react-router-dom";
import backgroundImg from "../assets/movie-theater.webp";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import { Header } from "../components";

const MainLayout = () => {
  return (
    <UserProvider>
      <Header />
      <main className="grid place-content-center bg-cover bg-center relative backdrop-blur-lg"
        style={{
          backgroundImage: `url(${backgroundImg})`
        }}>
          <Outlet />
      </main>
      <ToastContainer />
    </UserProvider>
  );
};

export default MainLayout;
