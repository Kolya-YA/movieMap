import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Button = ({ text, onClick, className, isDisabled, btnLink }) => {

    const btnStyle =
        classNames(
            "inline-block py-2 px-4 text-center text-main-text bg-black/70 rounded-md border border-white border-opacity-70 shadow-diffused transition duration-800 hover:bg-gray-900 hover:border-gray-600 hover:bg-opacity-100 disabled:text-gray-600", className
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