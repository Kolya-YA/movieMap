import axios from "axios";
import { jwtDecode } from "jwt-decode";

import { useContext, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LuMail, LuKeyRound } from "react-icons/lu";

import { useLogout } from "../hooks";
import { UserContext } from "../contexts";
import { LoginInputField } from "../components/FormComponents";
import Button from '../components/Button';

const Login = () => {
  const navigate = useNavigate();
  const focusedInputRef = useRef(null);
  const handleLogout = useLogout();
  const { user, setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState(null);

  useEffect(() => {
    if (focusedInputRef.current) {
      focusedInputRef.current?.focus();
    }
  }, []);


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
      axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
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
        <Button text="Logout" onClick={handleLogout} />
      </div>
    )
  }

  return (
    <div className="max-w-md p-8 grid gap-6 text-white">
      <h2 className="text-2xl font-bold text-center">Login</h2>
      <form onSubmit={handleSubmit} className="grid gap-6">
        <label htmlFor="email" className="sr-only">Email</label>

        <LoginInputField
          id="email"
          type="email"
          ref={focusedInputRef}
          value={formData.email}
          onChange={handleChange}
          Icon={LuMail}
          placeholder="Email"
          required
          autoComplete="email"
        />
        <LoginInputField
          id="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          Icon={LuKeyRound}
          placeholder="Password"
          required
          autoComplete="current-password"
        />
        {loginError && <p className="text-red-200">{loginError}</p>}

        <div className="flex justify-between flex-row-reverse gap-6">
          <Button text="Login" className="flex-1" />
          <Button text="Sign Up" className="flex-1" />
        </div>
      </form>
    </div>
  )
};

export default Login;
