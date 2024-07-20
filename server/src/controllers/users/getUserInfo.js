import User from "../../models/User.js";

const getUserInfo = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email });

		if (!user || !(await user.checkPassword(password))) {
			return res.status(401).json({ error: "Invalid email or password" });
		}

		return res.status(200).json({ token: user.createAuthToken() });
	} catch (error) {
		res.status(500).json({ errorMsg: "Authentification error", error });
	}
};

export default getUserInfo;
