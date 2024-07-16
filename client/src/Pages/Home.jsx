import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../contexts'

const Home = () => {

    const { user } = useContext(UserContext)

    const [serverResponse, setServerResponse] = useState({
        hello: '',
        users: []
    })

    useEffect(() => {
        const fetchServer = async () => {
            try {
                const [{ data: hello }, { data: users }] = await Promise.all([
                    axios.get('/api'),
                    axios.get('/api/v1/users')
                ])
                setServerResponse(prev => ({ ...prev, hello, users }))
            } catch (error) {
                console.error(error)
            }
        }
        fetchServer()
    }, [])

    return (
        <>
            <h1>Home page</h1>
            <p>Server say {serverResponse.hello}</p>
            <p>Users list:</p>
            <ul>
                {serverResponse.users.map((user, index) => (
                    <li key={user.id}>{index + 1}. {user.name}</li>
                ))}
            </ul>

            {user && (
                <>
                    <hr />
                    <p>Welcome, {user.name}</p>
                    <p>Index: {user.id}</p>
                    <p>Email: {user.email}</p>
                    {user.movieList.length > 0 && (
                        <>
                            <p>Movie list:</p>
                            <ul>
                                {user.movieList.map((movie, index) => (
                                    <li key={movie.id}>{index + 1}. id: {movie.id} Date: {movie.viewedDate} Rating: {movie.rating}</li>
                                ))}
                            </ul>
                        </>
                    )}
                </>
            )}

        </>
    )
}

export default Home;