import { useState, useContext } from 'react';
import { LoginForm, SighUpForm } from '../components';
import { UserContext } from '../contexts'

const LoginSignUp = () => {
    const { user, setUser } = useContext(UserContext)
    const [activeForm, setActiveForm] = useState('login')

    return (
        <>
            {user
                ? (
                    <>
                        <h1>Welcome {user.name}</h1>
                        <p>You are already logged in</p>
                        <button className="btn-login" type="button" onClick={() => setUser(null)}>Logout</button>
                    </>
                )
                : (
                    <>
                        <h1>Login / Sign Up page</h1>
                        <div className="flex border-b">
                            <button type="button"
                                className={`py-2 px-4 ${activeForm === 'login'
                                    ? 'border-b-2 border-blue-500 text-blue-500'
                                    : 'text-gray-500 hover:text-gray-700'
                                    }`}
                                onClick={() => setActiveForm('login')}
                            >
                                Login
                            </button>
                            <button type="button"
                                className={`py-2 px-4 ${activeForm !== 'login'
                                    ? 'border-b-2 border-blue-500 text-blue-500'
                                    : 'text-gray-500 hover:text-gray-700'
                                    }`}
                                onClick={() => setActiveForm('sighup')}
                            >
                                Sign Up
                            </button>
                        </div>
                        {activeForm === 'login'
                            ? <LoginForm />
                            : <SighUpForm />
                        }
                    </>
                )}
        </>
    )
}

export default LoginSignUp;