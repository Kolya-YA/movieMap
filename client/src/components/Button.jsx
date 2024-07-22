import classNames from 'classnames';


const Button = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
      "rounded-md border border-white border-opacity-70 bg-black bg-opacity-70 shadow-diffused text-white py-2 px-4 hover:bg-black hover:text-gray-400 hover:bg-opacity-100 transition duration-300  ",
      {
        "bg-white bg-opacity-80 transition duration-400": isClicked,
      },
      className
      )}
    >
      {text}
    </button>
  );
};

export default Button;