import { UserProvider } from "../contexts";
import { Outlet } from "react-router-dom";
import backgroundImg from "../components/movie-theater-Black.png";

import { Header, Footer } from "../components";

const MainLayout = () => {
  return (
    <UserProvider>
      <Header />
      <div className="relative ">
                <main className="flex justify-center items-center bg-cover bg-center relative min-h-full "
                      style={{
                          backgroundImage: `url(${backgroundImg})`
                      }}>
                    <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
                    <div className="relative z-20">
                        <Outlet />
                    </div>
                </main>
            </div>
      <Footer />
    </UserProvider>
  );
};

export default MainLayout;
