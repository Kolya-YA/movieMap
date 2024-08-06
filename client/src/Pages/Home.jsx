import { useState, useEffect, lazy, Suspense } from 'react'
import axios from 'axios'
import { useUserContext } from '../hooks'
const UserHomePage = lazy(() => import('../components/UserHomePage'))
const GuestHomePage = lazy(() => import('../components/GuestHomePage'))


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
        <div className="grid gap-4 text-main-text">
            <Suspense fallback={<div>Loading...</div>}>
                {user
                    ? <UserHomePage dailyRecs={dailyRecs} />
                    : <GuestHomePage dailyRecs={dailyRecs} />
                }
            </Suspense>
        </div>
    );
}

export default Home;