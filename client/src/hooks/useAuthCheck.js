import { jwtDecode } from "jwt-decode";
import { useUserContext } from "./";

const useAuthCheck = () => {
	const { userLogout } = useUserContext();

	const checkAuth = () => {
		const token = localStorage.getItem("token");

		if (!token) {
			console.log("Token is not present");
			userLogout({ login: true });
			return false;
		}

		const user = jwtDecode(token);

		if (!user) {
			console.log("User is not logged in");
			userLogout({ login: true });
			return false;
		}
		if (user.exp * 1000 < Date.now()) {
			console.log("Token has expired");
			userLogout({ login: true });
			return false;
		}

		console.log(
			`User is already logged in. ${Math.floor((user.exp * 1000 - Date.now()) / 1000 / 60)} mins left`,
		);
		return true;
	};
	return checkAuth;
};

export default useAuthCheck;
