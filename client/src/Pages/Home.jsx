import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../contexts'
import { UserHomePage, GuestHomePage } from '../components'

const tempMovieList = [
    { id: 111, title: 'The Shawshank Redemption', year: 1994, rating: 9.2 },
    { id: 222, title: 'The Godfather', year: 1972, rating: 9.1 },
    { id: 333, title: 'The Dark Knight', year: 2008, rating: 9.0 },
    { id: 444, title: 'The Lord of the Rings: The Return of the King', year: 2003, rating: 8.9 },
    { id: 555, title: 'Pulp Fiction', year: 1994, rating: 8.9 }
];

const Home = () => {
    const { user } = useContext(UserContext)    
    const [dailyRecs, setDailyRecs] = useState([])
    

    useEffect(() => {
        const fetchServer = async () => {
            try {
                const { data } = await axios.get('/api/v1/search/daily')
                setDailyRecs(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchServer()
    }, [])


    console.log(dailyRecs)
    return (
        <div className="bg-white/40">
            {user
                ? <UserHomePage dailyRecs={dailyRecs} />
                : <GuestHomePage dailyRecs={dailyRecs} />
            }
        </div>
    );
}

export default Home;