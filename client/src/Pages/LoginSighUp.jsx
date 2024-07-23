import { useContext, useState } from "react";
import { UserContext } from "../contexts";
import Button from '../components/Button';
import { LuMail, LuKeyRound } from "react-icons/lu";

const LoginSignUp = () => {
  const { user, setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  }

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
        <div className="max-w-md p-8 grid gap-6 text-white">
          <h2 className="text-2xl font-bold text-center">Login</h2>
          <form onSubmit={handleSubmit} className="grid gap-6">
            <label htmlFor="email" className="sr-only">Email</label>
            <div className="relative">
              <input
                value={formData.email}
                onChange={handleChange}
                type="email"
                required
                id="email"
                autoComplete="email"
                className="
                    w-full ps-10 pe-4 py-2 border border-current shadow-diffused bg-black/70 rounded
                    focus:outline-none focus:ring-2 focus:ring-gray-200 hover:border-gray-600 transition"
                placeholder="Email"
              />
              <LuMail size={20} aria-hidden="true" className="absolute inset-y-0 left-3 my-auto stroke-current" />
            </div>
            <label htmlFor="password" className="sr-only">Password</label>
            <div className="relative">
              <input
                value={formData.password}
                onChange={handleChange}
                type="password"
                minLength="8"
                required
                id="password"
                autoComplete="current-password"
                className="
                    w-full ps-10 pe-4 py-2 border border-current shadow-diffused bg-black/70 rounded
                    focus:outline-none focus:ring-2 focus:ring-gray-200 hover:border-gray-600 transition"
                placeholder="Password"
              />
              <LuKeyRound size={20} aria-hidden="true" className="absolute inset-y-0 left-3 my-auto stroke-current" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Button text="Sign Up" />
              <Button text="Login" />
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default LoginSignUp;
