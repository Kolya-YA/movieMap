import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { LuMail, LuKeyRound } from "react-icons/lu";

import { useUserContext } from "../hooks";
import { LoginInputField } from "../components/FormComponents";
import Button from "../components/Button";

const Login = () => {
  const focusedInputRef = useRef(null);
  const { user, loginUser, logoutUser } = useUserContext();
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
      await loginUser(formData)
    } catch (error) {
      console.log(error)
      const errMsg = error.response?.data?.message || "Failed to login";
      setLoginError(errMsg);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  if (user) {
    return (
      <div className="max-w-md p-8 grid gap-6 text-white">
        <h1>Welcome back {user.email}</h1>
        <p>You are already logged in</p>
        <Button text="Logout" onClick={logoutUser} />
      </div>
    );
  }

  return (
    <div className="max-w-md p-8 grid gap-6 text-white">
      <h2 className="text-2xl font-bold text-center">Login</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <label htmlFor="email" className="sr-only">
          Email
        </label>

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
          <Button text="Login" className=" w-24" />
          <Link to="/Signup">
            <Button text="Sign Up" className="w-24" />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
