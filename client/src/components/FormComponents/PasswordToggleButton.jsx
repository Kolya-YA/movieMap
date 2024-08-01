import { LuEye, LuEyeOff } from "react-icons/lu";

const PasswordToggleButton = ({ psdwShow,  togglePsdwShow }) => (
  <button
    type="button"
    onClick={togglePsdwShow}
    className="absolute end-2 inset-y-0 block my-auto max-h-fit p-1"
  >
    {
      psdwShow
        ? <LuEyeOff />
        : <LuEye />
    }
    <span className="sr-only">Toggle password visibility</span> 
  </button>
);

export default PasswordToggleButton;