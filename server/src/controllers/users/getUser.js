import User from "../../models/user.js";
import mongoose from "mongoose";
// import { DAILY_CACHE_DURATION } from "../../utils/config.js";

const getUser = async (req, res) => {
	try {
		const user = await User.findById(req.userId);
		console.log(user);
		if (!user) {
			return res.status(401).json({ error: "Invalid ID" });
		}

		return res.status(200).json({ user, token: user.createAuthToken() });
	} catch (error) {
		res.status(500).json({ errorMsg: "Request error", error });
	}
};

export default getUser;

// Title
// year
// runtime
// raitig my and public
// genres
