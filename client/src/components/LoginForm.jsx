import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../hooks';

const LoginForm = () => {
    const { setUser, testUser } = useUserContext()
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        const loginSuccessful = true
        if (loginSuccessful) {
            setUser(testUser)
            navigate('/')
        } else {
            alert('Login failed')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login form</h1>
            <button type="submit" className="btn-login">Login</button>
        </form>
    )
}

export default LoginForm;