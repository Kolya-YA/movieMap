import User from "../../models/user.js";
import {
	AI_REQ_DAILY_LIMIT,
	AI_REQ_MOVIES_PER_REQ,
} from "../../utils/config.js";

const getAiAdvice = () => {
	return [
		{ movie: "66ad00fe34e1d18214a96173", tmdbMovieId: 903629 },
		{ movie: "66a8dc65088d1fdeb3c0c0dd", tmdbMovieId: 786892 },
		{ movie: "66a8dd66088d1fdeb3c0c438", tmdbMovieId: 603 },
	];
};

const getUserAiRecs = async (req, res) => {
	try {
		const user = await User.findById(req.userId);

		// console.log("User: ", user);

		if (!user) {
			return res.status(404).json({ error: "Invalid ID" });
		}

		if (user.movAIRecs.length >= AI_REQ_DAILY_LIMIT * AI_REQ_MOVIES_PER_REQ) {
			return res.status(403).json({ error: "AI requests limit reached" });
		}
		const aiAdvise = getAiAdvice();

		const updatedUser = await User.findByIdAndUpdate(
			req.userId,
			{ $push: { movAIRecs: { $each: aiAdvise } } },
			{ new: true },
		);

		if (!updatedUser) {
			return res.status(404).json({ error: "User not found during update" });
		}

		console.log("AI request added to user: ", updatedUser);
		// updatedUser = user;
		return res
			.status(200)
			.json({ user: updatedUser, token: updatedUser.createAuthToken() });
	} catch (error) {
		res.status(500).json({ errorMsg: "AI Request error", error });
	}
};

export default getUserAiRecs;
