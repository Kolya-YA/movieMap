import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts";

const useLogout = () => {
	const navigate = useNavigate();
	const { setUser } = useContext(UserContext);

	const handleLogout = () => {
		navigate("/", { replace: true });
		localStorage.clear();
		axios.defaults.headers.common.Authorization = undefined;
		setUser(null);
	};

	return handleLogout;
};

export default useLogout;
