import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../contexts'
import { UserHomePage, GuestHomePage } from '../components'

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