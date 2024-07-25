import { useUserContext } from "./";

const useAuthCheck = () => {
	const { userLogout } = useUserContext();

	const checkAuth = (user) => {
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

		console.log("User is already logged in");
		console.log(Math.floor((user.exp * 1000 - Date.now()) / 1000 / 60), "mins left");
		console.log(user);
		return user;
	};
	return checkAuth;
};

export default useAuthCheck;
