import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

import { useToggle } from "../hooks";
import DateOfBirthPicker from "./FormComponents/BirthDateSelector";
import { CheckboxComponent, InputComponent, SelectComponent, } from "./FormComponents";
import PasswordToggleButton from './FormComponents/PasswordToggleButton';
import Button from "./Button";
import { LuMail, LuKeyRound, LuMapPin, LuPin, } from "react-icons/lu";

const SignUpForm = () => {
  const showErrorToast = (msg = "Error!") => toast.error(msg, { autoClose: 15000 });
  const showSuccessToast = (msg = "Success!") => toast.success(msg, { autoClose: 10000 });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
    country: "",
    birthYear: "",
    tocAgreement: false,
    dpAgreement: false,
  });
  const [psdwShow, togglePsdwShow] = useToggle(false);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubitting] = useState(false);
  const [countries, setCountries] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("/api/v1/config/countries");
        setCountries(response.data);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      }
    };
    fetchCountries();
  }, []);

  const changeHandler = ({ target }) => {
    const { id, value, type, checked } = target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const formErrors = (error) => {
    const errDetails = error?.response?.data?.details;
    if (errDetails) {
      console.log(errDetails);
      for (const err in errDetails) {
        console.log(err);
        const { name, message } = errDetails[err];
        showErrorToast(`${name}. ${message}`);
      }
    } else {
      showErrorToast(error?.message);
    }
    setError(error?.message);

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.dismiss();
    setIsSubitting(true);
    setError(null);
    try {
      const { data } = await axios.post("/api/v1/users", formData);
      showSuccessToast("User created successfully");
      console.log(data);
      navigate("/login", { replace: true });
    } catch (error) {
      formErrors(error);
      setError(error);
      console.error("Failed to sign up:", error);
    } finally {
      setIsSubitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 max-w-md">
      <InputComponent
        type="email"
        id="email"
        req
        label="Email"
        placeholder="Email"
        value={formData.email}
        onChange={changeHandler}
        Icon={LuMail}
      />
      <InputComponent
        type="password"
        id="password"
        placeholder={"Password"}
        req
        label="Password"
        value={formData.password}
        onChange={changeHandler}
        Icon={LuKeyRound}
        psdwShow={psdwShow}
        togglePsdwShow={togglePsdwShow}
        PswdToggler={PasswordToggleButton}
      />

      <InputComponent
        type="password"
        id="passwordConfirmation"
        placeholder="Confirm password"
        req
        label="Confirm password"
        value={formData.passwordConfirmation}
        onChange={changeHandler}
        Icon={LuKeyRound}
        psdwShow={psdwShow}
        togglePsdwShow={togglePsdwShow}
        PswdToggler={PasswordToggleButton}
      />
      <p>
        To provide you with more personalized recommendations, we need your
        year of birth and general area (city or region). <br /> Your privacy
        is important to us, and this data will be used solely for
        recommendation purposes.
      </p>
      <DateOfBirthPicker
        id="birthYear"
        selectedDate={formData.birthYear}
        onChange={changeHandler}
        label="Date of Birth"
        Icon={LuMapPin}
        required
      />
      {/* <InputComponent type="number" id="birthYear" label="Year of birth" value={formData.birthYear} onChange={changeHandler} /> */}
      <SelectComponent
        id="country"
        Icon={LuPin}
        label="Select your country"
        values={countries}
        value={formData.country}
        onChange={changeHandler}
      />
      <CheckboxComponent
        id="tocAgreement"
        req
        label="I accept the terms and conditions"
        value={formData.tocAgreement}
        onChange={changeHandler}
      />
      <CheckboxComponent
        id="dpAgreement"
        req
        label="I accept the data protection policy"
        value={formData.dpAgreement}
        onChange={changeHandler}
      />

      <Button
        type="submit"
        text={isSubmitting ? "Signing up..." : "Sign Up"}
        className="mx-auto w-24 "
      />
      {error && <p style={{ color: "red" }}>{(error?.message)?.toString() || "!!!ERROR!!!"}</p>}
    </form>
  );
};

export default SignUpForm;
