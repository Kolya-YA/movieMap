import { useContext } from "react";
import { UserContext } from "../contexts";
import Button from '../components/Button';
import { LuMail, LuKeyRound } from "react-icons/lu";

const LoginSignUp = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      {user ? (
        <>
          <h1>Welcome back {user.name}</h1>
          <p>You are already logged in</p>
          <button
            className="btn-login"
            type="button"
            onClick={() => setUser(null)}
          >
            Logout
          </button>
        </>
      ) : (
        <div className="flex justify-center items-center min-h-full ">
          <div className=" w-full max-w-md p-8 space-y-6 bg-transparent">
            <h2 className="text-2xl font-bold text-center text-white ">Login</h2>
            <form className="space-y-6">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 pl-10 border border-white border-opacity-70 shadow-diffused bg-black bg-opacity-70 text-white rounded focus:outline-none focus:ring-2 focus:ring-gray-200 duration-900  hover:border-gray-600"
                  placeholder="Email"
                />
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <LuMail size={24} aria-hidden="true" className="ms-auto" />
                  </svg>
                </span>
              </div>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 pl-10 border border-white border-opacity-70 shadow-diffused bg-black bg-opacity-70 text-white rounded focus:outline-none focus:ring-2 focus:ring-gray-200 duration-900  hover:border-gray-600"
                  placeholder="Password"
                />
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="w-5 h-5 text-gray-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <LuKeyRound
                      size={24}
                      aria-hidden="true"
                      className="ms-auto"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex flex-row justify-center space-x-8">
                <Button text="Sign Up" className="w-24" />
                <Button text="Login" className="w-24" />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginSignUp;
