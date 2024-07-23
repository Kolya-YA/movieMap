import classNames from 'classnames';


const Button = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
      "rounded-md border border-white border-opacity-70 bg-black bg-opacity-70 shadow-diffused text-white py-2 px-4 transition duration-800 hover:bg-black hover:text-gray-600 hover:border-gray-600 hover:bg-opacity-100  ", className
      )}
    >
      {text}
    </button>
  );
};

export default Button;