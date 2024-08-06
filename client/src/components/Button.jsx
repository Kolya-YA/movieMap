import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Button = ({ text, onClick, className, isDisabled, btnLink }) => {

    const btnStyle =
        classNames(
            "inline-block text-center rounded-md border border-white border-opacity-70 bg-black bg-opacity-70 shadow-diffused text-main-text py-2 px-4 transition duration-800 hover:bg-black hover:text-gray-600 hover:border-gray-600 hover:bg-opacity-100  ", className
        )

    return (
        btnLink ? (
            <Link
                to={btnLink}
                className={btnStyle}
            >
                {text}
            </Link>
        ) : (
            // biome-ignore lint/a11y/useButtonType: <explanation>
            <button
                onClick={onClick}
                disabled={isDisabled}
                className={btnStyle}
            >
                {text}
            </button>
        )
    );
}
export default Button;