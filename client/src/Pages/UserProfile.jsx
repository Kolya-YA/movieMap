import { useUserContext } from '../hooks'
import { UserInfo } from '../components'

const About = () => {
    const { user } = useUserContext()

    return (
        <section className="bg-white/60 p-2">
            <h1 className="text-2xl font-semibold">User profile</h1>
            {user && <UserInfo user={user} />}
        </section>
    )
}

export default About;