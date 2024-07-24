import { useContext } from 'react'

import { UserContext } from '../contexts'
import { UserInfo } from '../components'

const About = () => {
    const { user } = useContext(UserContext)

    return (
        <section className="bg-white/40">
            <h1>Our team:</h1>
            <ol>
                <li>John Doe</li>
                <li>Jack Doe</li>
                <li>John Smith</li>
            </ol>
            {user && <UserInfo user={user} />}
        </section>
    )
}

export default About;