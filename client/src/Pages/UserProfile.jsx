import { useUserContext } from '../hooks'
import { UserInfo } from '../components'

const About = () => {
    const { user } = useUserContext()

    return (
        <section className="bg-white/40">
            <h1>User profile</h1>
            {user && <UserInfo user={user} />}
        </section>
    )
}

export default About;