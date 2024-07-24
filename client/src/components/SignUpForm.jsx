import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LuMail, LuKeyRound } from "react-icons/lu";

import { CheckboxComponent, InputComponent, SelectComponent } from "./FormComponents"



const SignUpForm = () => {
    const errNotify = (msg = 'Error!') => toast.error(msg, { autoClose: 15000 });

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        passwordConfirmation: "",
        birthYear: "",
        tocAgreement: false,
        dpAgreement: false,
    })
    const [error, setError] = useState(null)
    const [isSubmitting, setIsSubitting] = useState(false)
    const [countries, setCountries] = useState([])
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
        setFormData(prev => ({
            ...prev,
            [id]: type === 'checkbox' ? checked : value
        }));
    }

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
    }

    return (
        <>
        <div className="flex justify-center items-center min-h-full text-white">
        <div className=" w-full max-w-md p-8 space-y-6 bg-transparent">
            <form onSubmit={handleSubmit}>
                <InputComponent  
                type="email" 
                id="email" 
                req label="Email" 
                icon={<LuMail size={24} aria-hidden="true" className="ms-auto color-white" />} 
                placeholder="Email" 
                value={formData.email} 
                onChange={changeHandler} 
                />
                <InputComponent type="password" id="password" req label="Password" value={formData.password} onChange={changeHandler} />
                <InputComponent type="password" id="passwordConfirmation" req label="Confirm password" value={formData.passwordConfirmation} onChange={changeHandler} />
                <p>For better recommendations please add your date of birth and Location</p>
                <InputComponent type="number" id="birthYear" label="Year of birth" value={formData.birthYear} onChange={changeHandler} />
                <SelectComponent id="country" label="Select your country" values={countries} value={formData.country} onChange={changeHandler} />
                <CheckboxComponent id="tocAgreement" req label="I accept the terms and conditions" value={formData.tocAgreement} onChange={changeHandler} />
                <CheckboxComponent id="dpAgreement" req label="I accept the data protection policy" value={formData.dpAgreement} onChange={changeHandler} />
                <button type="submit" className="btn-login">
                    {isSubmitting ? "Signing up..." : "Sign Up"}
                </button>
                {error && <p style={{ color: 'red' }}>!!!ERROR!!!</p>}
            </form>
        </div>
        </div>
        </>
    )
}

export default SignUpForm;