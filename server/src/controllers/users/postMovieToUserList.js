import User from "../../models/user.js";

const postMovieToUserList = async (req, res) => {
	try {
		const updatedUser = await User.findByIdAndUpdate(
			req.userId,
			{ $push: { movieList: req.body.movie } },
			{ new: true }
		);


		if (!updatedUser) {
			return res.status(401).json({ error: "Invalid ID" });
		}

		return res
			.status(200)
			.json({ user: updatedUser, token: updatedUser.createAuthToken() });
	} catch (error) {
		res.status(500).json({ errorMsg: "Request error", error });
	}
};

export default postMovieToUserList;