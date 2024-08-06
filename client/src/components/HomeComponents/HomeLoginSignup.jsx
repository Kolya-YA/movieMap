import { Button } from '../index.js';

const HomeLoginSignup = () => {

    return (
        <div className="grid gap-4 px-2 text-main-text">
            <h2 className="text-xl text-center font-semibold">Get full access to our services</h2>
            <div className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2">
                <BtnBlock header="Create a free account now" linkText="Create account" link="signup" />
                <BtnBlock header="Login to your account" linkText="Log in" link="login" />
            </div>
        </div>
    );
}

export default HomeLoginSignup;

function BtnBlock({ header, linkText, link }) {
    return (
        <div className='grid gap-2 p-2 rounded bg-block-bg'>
            <h3 className='text-lg text-center'>{header}</h3>
            <Button btnLink={link} text={linkText} />
        </div>
    )
}