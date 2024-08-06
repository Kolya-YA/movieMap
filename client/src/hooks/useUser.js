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
			updateLocalUser(data);
		} catch (error) {
			console.error("Failed to update user: ", error);
		}
	};

	const addMovieToUserList = async (movie) => {
		try {
			const { data } = await axios.post("/api/v1/users/add-movie", {
				id: user.id,
				movie,
			});
			updateLocalUser(data);
		} catch (error) {
			console.error("Failed to add movie to user list: ", error);
		}
	};

	const toggleMovieInUserList = async (movieId) => {
		try {
			const { data } = await axios.post("/api/v1/users/toggle-movie", {
				id: user.id,
				movieId,
			});
			updateLocalUser(data);
		} catch (error) {
			console.error("Failed to remove movie from user list: ", error);
		}
	};

	const updateMovieInUserList = async (movieId, dataForUpdate) => {
		try {
			const { data } = await axios.put("/api/v1/users/update-movie", {
				id: user.id,
				movieId,
				dataForUpdate,
			});
			updateLocalUser(data);
		} catch (error) {
			console.error("Failed to update movie in user list: ", error);
		}
	};

	const getAiRecs = async (companion) => {
		const birthYear = user.birthYear ? new Date(user.birthYear).getFullYear() : 1990 // default birth year
		const country = user.country || "Germany"; // default country
		
		try {
			const { data } = await axios.get("/api/v1/users/ai-recs", {
				params: { companion, birthYear, country },
			});
			updateLocalUser(data);
		} catch (error) {
			console.error("Failed to get AI recommendations: ", error);
		}
	};

	function updateLocalUser(data) {
		const { token, user } = data;
		if (!token) {
			throw new Error("No token in response");
		}
		localStorage.setItem("token", token);
		setUser((prevUser) => ({ ...prevUser, ...user }));
		axios.defaults.headers.common.Authorization = `Bearer ${token}`;
	}

	return {
		user,
		updateUser,
		loginUser,
		logoutUser,
		addMovieToUserList,
		toggleMovieInUserList,
		updateMovieInUserList,
		getAiRecs,
	};
};

export default useUser;
