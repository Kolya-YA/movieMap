import User from "../../models/user.js";

const getUser = async (req, res) => {
    try {
		const user = await User.findById(req.userId);          

		if (!user) {
			return res.status(401).json({ error: "Invalid ID" });
		}

		return res.status(200).json({ user, token: user.createAuthToken() });
	} catch (error) {
		res.status(500).json({ errorMsg: "Authentification error", error });
	}
};

export default getUser;