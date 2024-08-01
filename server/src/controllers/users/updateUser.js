import User from "../../models/user.js";

const updateUserMovie = async (req, res, next) => {
	const dataForUpdate = req.body;
	try {
		const updateObject = {};
		for (const [key, value] of Object.entries(dataForUpdate)) {
			updateObject[`movies.${key}`] = value;
		}
		
		const updatedUser = await User.findByIdAndUpdate(
			req.userId,
			{ $set: updateObject },
			{ new: true }
		);

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

export default updateUserMovie;
