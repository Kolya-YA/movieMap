import User from "../../models/user.js";

const updateUser = async (req, res, next) => {
	const user = req.body;
	try {
		const updatedUser = await User.findByIdAndUpdate(req.userId, user, {
			new: true,
		});

		if (!updatedUser) {
			return res.status(404).json({ error: "User not found" });
		}
		return res
			.status(200)
			.json({ user: updatedUser, token: updatedUser.createAuthToken() });
	} catch (error) {
		next(error);
	}
};

export default updateUser;
