import { useUserContext } from '../hooks'
import { UserInfo } from '../components'

const About = () => {
    const { user } = useUserContext()

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