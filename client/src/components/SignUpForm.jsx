import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { UserContext } from '../contexts';

import { CheckboxComponent, InputComponent, SelectComponent } from "./FormComponents"
import axios from 'axios';

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        passwordConfirmation: "",
        birthYear: "",
        tocAgreement: false,
        dpAgreement: false,
    })

    const [countries, setCountries] = useState([])

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

    // const { setUser, testUser } = useContext(UserContext)
    // const navigate = useNavigate();

    const changeHandler = ({ target }) => {
        const { id, value, type, checked } = target;
        setFormData(prev => ({
            ...prev,
            [id]: type === 'checkbox' ? checked : value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const signUpSuccessful = true
        if (signUpSuccessful) {
            alert("Sigh isn't implemented yet")
        } else {
            alert('Sign up failed')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <InputComponent type="email" id="email" req label="Email" value={formData.email} onChange={changeHandler} />
            <InputComponent type="password" id="password" req label="Password" value={formData.password} onChange={changeHandler} />
            <InputComponent type="password" id="passwordConfirmation" req label="Confirm password" value={formData.passwordConfirmation} onChange={changeHandler} />
            <p>For better recommendations please add your date of birth and Location</p>
            <InputComponent type="number" id="birthYear" label="Year of birth" value={formData.birthYear} onChange={changeHandler} />
            <SelectComponent id="country" label="Select your country" values={countries} value={formData.country} onChange={changeHandler} />
            <CheckboxComponent id="tocAgreement" req label="I accept the terms and conditions" value={formData.tocAgreement} onChange={changeHandler} />
            <CheckboxComponent id="dpAgreement" req label="I accept the data protection policy" value={formData.dpAgreement} onChange={changeHandler} />
            <button type="submit" className="btn-login">Sign Up</button>
        </form>
    )
}

export default SignUpForm;