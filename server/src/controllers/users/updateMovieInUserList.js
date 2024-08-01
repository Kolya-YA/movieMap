import User from "../../models/user.js";

const updateMovieInUserList = async (req, res, next) => {
	const {dataForUpdate, movieId} = req.body;
	try {
		const updateObject = {};
		for (const [key, value] of Object.entries(dataForUpdate)) {
			updateObject[`movieList.$.${key}`] = value;
		}

		const updatedUser = await User.findOneAndUpdate(
			{ _id: req.userId, 'movieList._id': movieId },
			{ $set: updateObject },
			{ new: true },
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

export default updateMovieInUserList;
