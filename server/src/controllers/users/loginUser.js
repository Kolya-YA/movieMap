import User from "../../models/user.js";

const loginUser = async (req, res) => {
	const { email, password } = req.body;
	try {
		console.log("loginUser -> email", email);
		const user = await User.findOne({ email });

		if (!user || !(await user.checkPassword(password))) {
			console.log("Invalid email or password");
			return res.status(401).send({ message: "Invalid email or password" });
		}

		return res.status(200).json({ user, token: user.createAuthToken() });
	} catch (error) {
		res.status(500).json({ errorMsg: "Authentification error", error });
	}
};

export default loginUser;
