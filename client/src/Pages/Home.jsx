import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../contexts'
import { UserHomePage, TopMovieList, GuestHomePage } from '../components'

const Home = () => {
    const { user } = useContext(UserContext)
    
    // This useState and useEffect just for testing server connection
    const [serverResponse, setServerResponse] = useState({ hello: '' })
    useEffect(() => {
        const fetchServer = async () => {
            try {
                const { data: hello } = await axios.get('/api')

                setServerResponse(prev => ({ ...prev, hello }))
            } catch (error) {
                console.error(error)
            }
        }
        fetchServer()
    }, [])

    return (
        <>
            {user
                ? <UserHomePage />
                : <GuestHomePage />
            }
            <TopMovieList />
            <p>Server say: {serverResponse.hello}</p>
        </>
    );
}

export default Home;