import { useContext } from 'react'

import { UserContext } from '../contexts'
import { UserInfo } from '../components'

const About = () => {
    const { user } = useContext(UserContext)

    return (
        <>
            <h1>Our team</h1>
            <ol>
                <li>John Doe</li>
                <li>Jane Doe</li>
                <li>John Smith</li>
            </ol>
            {user && <UserInfo user={user} />}
        </>
    )
}

export default About;