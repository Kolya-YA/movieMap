import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const useUser = () => {
	const [user, setUser] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			const decodedToken = jwtDecode(token);
			if (decodedToken.exp * 1000 > Date.now()) {
				setUser(decodedToken);
				axios.defaults.headers.common.Authorization = `Bearer ${token}`;
			} else {
				localStorage.removeItem("token");
			}
		}
	}, []);

	const updateLocalUser = (data) => {
		console.log("data", data);
		const { token, user } = data;
		if (!token) {
			throw new Error("No token in response");
		}
		localStorage.setItem("token", token);
		setUser(user);
		axios.defaults.headers.common.Authorization = `Bearer ${token}`;
	};

	const loginUser = async (formData) => {
		const { data } = await axios.post("/api/v1/users/login", formData);
		updateLocalUser(data);
		navigate(-1, { fallback: "/", replace: true });
	};

	const logoutUser = ({ login }) => {
		console.log("logoutUser");
		const path = login ? "/login" : "/";
		navigate(path, { replace: !login });
		localStorage.removeItem("token");
		axios.defaults.headers.common.Authorization = undefined;
		setUser(null);
	};

	const updateUser = async (updatedUser) => {
		try {
			// const { data } = await axios.put("/api/v1/users/", updatedUser);
			// updateLocalUser(data);
			setUser(updatedUser);
		} catch (error) {
			console.error("Failed to update user: ", error);
		}
	};

	return { user, updateUser, loginUser, logoutUser };
};

export default useUser;
