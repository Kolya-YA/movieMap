import User from "../../models/user.js";

const toggleMovieInUserList = async (req, res) => {
	console.log("rum", req.userId, req.body.movieId);
	try {
		const updatedUser = await User.findOneAndUpdate(
			{ _id: req.userId, "movieList._id": req.body.movieId },
			{ $bit: { "movieList.$.deleted": { xor: 1 } } },
			{ new: true },
		);
		console.log("updatedUser", updatedUser);
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

export default toggleMovieInUserList;
