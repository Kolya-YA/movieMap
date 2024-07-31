import { jwtDecode } from "jwt-decode";
import { useUserContext } from "./";

const useAuthCheck = () => {
	const { logoutUser } = useUserContext();

	const checkAuth = (param) => {

		const token = localStorage.getItem("token");

		if (!token) {
			console.log("Token is not present");
			logoutUser({ login: true, noNav: param?.noNav });
			return false;
		}

		const userFromToken = jwtDecode(token);

		if (!userFromToken) {
			console.log("User is not logged in");
			logoutUser({ login: true, noNav: param?.noNav });
			return false;
		}

		if (userFromToken.exp * 1000 < Date.now()) {
			console.log("Token has expired");
			logoutUser({ login: true, noNav: param.noNav });
			return false;
		}

		console.log(
			`User is already logged in. ${Math.floor((userFromToken.exp * 1000 - Date.now()) / 1000 / 60)} mins left`,
		);
		return true;
	};
	return checkAuth;
};

export default useAuthCheck;
