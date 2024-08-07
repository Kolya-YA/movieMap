import { useUserContext } from '../hooks';
import { UserInfo } from '../components';

const About = () => {
    const { user } = useUserContext();
    console.log(user);

    return (
        // <div className="text-main-text flex flex-col h-screen"></div>
        <section className="text-main-text">
            <h1 className="text-3xl font-semibold text-center my-4">User profile</h1>
            {user && <UserInfo user={user} />}
        </section>
    );
};

export default About;
