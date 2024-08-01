import { useState, useEffect } from 'react'
import axios from 'axios'
import { useUserContext } from '../hooks'
import { UserHomePage, GuestHomePage } from '../components'

const Home = () => {
    const { user } = useUserContext()    
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

    return (
        <div className="grid gap-4 text-white">
            {user
                ? <UserHomePage dailyRecs={dailyRecs} />
                : <GuestHomePage dailyRecs={dailyRecs} />
            }
        </div>
    );
}

export default Home;