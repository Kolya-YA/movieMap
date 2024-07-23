import axios from "axios";
import { jwtDecode } from "jwt-decode";

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../contexts";
import Button from '../components/Button';
import { LuMail, LuKeyRound } from "react-icons/lu";
import { useLogout } from "../hooks";

const Login = () => {
  const navigate = useNavigate();
  const handleLogout = useLogout();
  const { user, setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState(null);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoginError(null);
      const { data } = await axios.post("/api/v1/users/login", formData);
      if (!data.token) {
        throw new Error("No token in response");
      }
      localStorage.setItem("token", data.token);
      const decodedToken = jwtDecode(data.token);
      setUser(decodedToken);
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      const from = location.state?.from || { pathname: "/" };
      navigate(from, { replace: true });
    } catch (error) {
      const errMsg = error.response?.data?.message || "Failed to login";
      setLoginError(errMsg);
    }
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  }

  if (user) {
    return (
      <div className="max-w-md p-8 grid gap-6 text-white">
        <h1>Welcome back {user.email}</h1>
        <p>You are already logged in</p>
        <Button text="Logout" onClick={handleLogout}/>      
      </div>
    )
  }

  return (
    <div className="max-w-md p-8 grid gap-6 text-white">
      <h2 className="text-2xl font-bold text-center">Login</h2>
      <form onSubmit={handleSubmit} className="grid gap-6">
        <label htmlFor="email" className="sr-only">Email</label>

        <InputField
          id="email"
          type="email"
          value={formData.email}
          onCahnge={handleChange}
          Icon={LuMail}
          placeholder="Email"
          required
          autoComplete="email"
        />
        <InputField
          id="password"
          type="password"
          value={formData.password}
          onCahnge={handleChange}
          Icon={LuKeyRound}
          placeholder="Password"
          required
          autoComplete="current-password"
        />
        {loginError && <p className="text-red-200">{loginError}</p>}

        <div className="grid grid-cols-2 gap-6">
          <Button text="Sign Up" />
          <Button text="Login" />
        </div>
      </form>
    </div>
  )
};

export default Login;

function InputField({ id, type, value, onCahnge, Icon, placeholder, required, autoComplete }) {
  return (
    <div className="relative">
      <label htmlFor={id} className="sr-only">{placeholder}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onCahnge}
        minLength="8"
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="
                    w-full ps-10 pe-4 py-2 border border-current shadow-diffused bg-black/70 rounded
                    focus:outline-none focus:ring-2 focus:ring-gray-200 hover:border-gray-600 transition"
      />
      <Icon size={20} aria-hidden="true" className="absolute inset-y-0 left-3 my-auto stroke-current" />
    </div>
  )
}