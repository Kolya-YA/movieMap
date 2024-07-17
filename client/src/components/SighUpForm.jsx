// import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { UserContext } from '../contexts';

const SighUpForm = () => {
    // const { setUser, testUser } = useContext(UserContext)
    // const navigate = useNavigate();

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
            <h1>Sign up form</h1>
            <button type="submit" className="btn-login">Sign Up</button>
        </form>
    )
}

export default SighUpForm;