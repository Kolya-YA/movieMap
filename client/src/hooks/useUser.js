import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const useUser = () => {
	const [user, setUser] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const setupUser = async () => {
			const token = localStorage.getItem("token");
			if (token) {
				const decodedToken = jwtDecode(token);
				if (decodedToken.exp * 1000 > Date.now()) {
					axios.defaults.headers.common.Authorization = `Bearer ${token}`;
					const { data } = await axios.get("/api/v1/users/");
					updateLocalUser(data);
				} else {
					localStorage.removeItem("token");
				}
			}
		};
		setupUser();
	}, []);

	const loginUser = async (formData) => {
		const { data } = await axios.post("/api/v1/users/login", formData);
		updateLocalUser(data);
		navigate(-1, { fallback: "/", replace: true });
	};

	const logoutUser = ({ login, noNav }) => {
		if (!noNav) {
			const path = login ? "/login" : "/";
			navigate(path, { replace: !login });
		}
		localStorage.removeItem("token");
		axios.defaults.headers.common.Authorization = undefined;
		setUser(null);
	};

	const updateUser = async (updatedUser) => {
		try {
			const { data } = await axios.put("/api/v1/users/", updatedUser);
			console.log("upUser: ", data);
			updateLocalUser(data);
			// setUser(updatedUser);
		} catch (error) {
			console.error("Failed to update user: ", error);
		}
	};

	function updateLocalUser(data) {
		const { token, user } = data;
		if (!token) {
			throw new Error("No token in response");
		}
		localStorage.setItem("token", token);
		setUser(user);
		axios.defaults.headers.common.Authorization = `Bearer ${token}`;
	}

	return { user, updateUser, loginUser, logoutUser };
};

export default useUser;
