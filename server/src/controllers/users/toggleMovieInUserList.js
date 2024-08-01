import logger from "../../utils/logger.js";
import User from "../../models/user.js";

const toggleMovieInUserList = async (req, res) => {
	const userId = req.userId;
	const movieId = req.body.movieId;

	try {
		const user = await User.findOneAndUpdate(
			{ _id: userId, "movieList._id": movieId },
			{ $bit: { "movieList.$.deleted": { xor: 1 } } },
			{ new: true },
		);

		if (!user) {
			return res.status(404).send({ message: "User or movie not found" });
		}

		return res.status(200).json({ user: user, token: user.createAuthToken() });
	} catch (error) {
		logger.error(error);
		res.status(500).json({ errorMsg: "Request error", error });
	}
};

export default toggleMovieInUserList;
