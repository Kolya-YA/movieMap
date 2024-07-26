import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DateOfBirthPicker from "./FormComponents/BirthDateSelector";
import {
  CheckboxComponent,
  InputComponent,
  SelectComponent,
} from "./FormComponents";
import Button from "./Button";
import {
  LuMail,
  LuKeyRound,
  LuCake,
  LuMapPin,
  LuSquare,
  LuCheckSquare,
  LuPin,
} from "react-icons/lu";

const SignUpForm = () => {
  const errNotify = (msg = "Error!") => toast.error(msg, { autoClose: 15000 });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
    birthYear: "",
    tocAgreement: false,
    dpAgreement: false,
  });
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubitting] = useState(false);
  const [countries, setCountries] = useState([]);
  const [birthDate, setBirthDate] = useState(null);
  // Added state for birthDate

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

  // aded date change handler
  const handleDateChange = (date) => {
    setBirthDate(date);
    setFormData((prev) => ({
      ...prev,
      birthYear: date ? date.getFullYear() : "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.dismiss();
    setIsSubitting(true);
    setError(null);
    try {
      const { data } = await axios.post("/api/v1/users", formData);
      console.log(data);
      navigate("/login");
    } catch (error) {
      setError(error);
      errNotify(error?.message);
      console.error("Failed to sign up:", error);
    } finally {
      setIsSubitting(false);
    }
  };

  return (
    <>
      <div className="w-full max-w-md p-8 bg-transparent flex flex-col items-center text-center">
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
          <InputComponent
            type="email"
            id="email"
            req
            label="Email"
            icon={
              <LuMail
                size={24}
                aria-hidden="true"
                className="ms-auto color-white"
              />
            }
            placeholder="Email"
            value={formData.email}
            onChange={changeHandler}
          />
          <InputComponent
            type="password"
            id="password"
            icon={
              <LuKeyRound
                size={24}
                aria-hidden="true"
                className="ms-auto color-white"
              />
            }
            placeholder={"Password"}
            req
            label="Password"
            value={formData.password}
            onChange={changeHandler}
          />
          <InputComponent
            type="password"
            id="passwordConfirmation"
            icon={
              <LuKeyRound
                size={24}
                aria-hidden="true"
                className="ms-auto color-white"
              />
            }
            placeholder="Confirm password"
            req
            label="Confirm password"
            value={formData.passwordConfirmation}
            onChange={changeHandler}
          />
          <p>
            To provide you with more personalized recommendations, we need your
            year of birth and general area (city or region). <br /> Your privacy
            is important to us, and this data will be used solely for
            recommendation purposes.
          </p>
          <DateOfBirthPicker
            selectedDate={birthDate}
            onChange={handleDateChange}
            label="Date of Birth"
            icon={
              <LuMapPin
                size={24}
                aria-hidden="true"
                className="ms-auto color-white color-opacity-100"
              />
            }
            required
          />
          {/* <InputComponent type="number" id="birthYear" label="Year of birth" value={formData.birthYear} onChange={changeHandler} /> */}
          <SelectComponent
            id="country"
            icon={
              <LuPin
                size={24}
                aria-hidden="true"
                className="ms-auto color-white"
              />
            }
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
          {/* <button type="submit" className="btn-login">
                    {isSubmitting ? "Signing up..." : "Sign Up"}
                </button> */}
          <Button
            type="submit"
            text="Sign Up"
            className="btn-login mx-auto w-24 "
          >
            {isSubmitting ? "Signing up..." : "Sign Up"}
          </Button>
          {error && <p style={{ color: "red" }}>!!!ERROR!!!</p>}
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
