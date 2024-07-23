import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts";

const useLogout = () => {
	const navigate = useNavigate();
	const { setUser } = useContext(UserContext);

	const handleLogout = () => {
		console.log("Logging out");
		localStorage.clear();
		axios.defaults.headers.common.Authorization = undefined;
		setUser(null);
		navigate("/", { replace: true }); //TODO: Fix this
	};

	return handleLogout;
};

export default useLogout;
