import AiMovie from "../../models/aiMovie.js";
import User from "../../models/user.js";
import aiListToMovies from "../../utils/ai/aiListToMovies.js";
import getAiAdvice from "../../utils/ai/getAiAdvice.js";
import {
	AI_REQ_DAILY_LIMIT,
	AI_REQ_MOVIES_PER_REQ,
} from "../../utils/config.js";
console.log("AI_REQ_DAILY_LIMIT", AI_REQ_DAILY_LIMIT);
const getUserAiRecs = async (req, res) => {
	const { companion, birthYear, country } = req.query;
	console.log("Params:", req.query);
	try {
		const user = await User.findById(req.userId);

		if (!user) {
			return res.status(404).json({ error: "Invalid ID" });
		}

		const userAiRecs = await AiMovie.find({ userId: req.userId });
		if (userAiRecs.length >= AI_REQ_DAILY_LIMIT * AI_REQ_MOVIES_PER_REQ) {
			return res.status(403).json({ error: "AI requests limit reached" });
		}
		const exludeList = userAiRecs?.map((movie) => movie.title);

		const aiAdvise = await getAiAdvice(
			user?.movieList,
			companion,
			birthYear,
			country,
			exludeList,
		);
		// const aiAdvise = [
		// 	"The Princess Bride",
		// 	"Moana",
		// 	"How to Train Your Dragon",
		// 	"The Goonies",
		// 	"E.T. the Extra-Terrestrial",
		// ];

		// console.log("userAiRecs", userAiRecs.length);
		// console.log("AI advice: ", aiAdvise);
		const aiMovieList = await aiListToMovies(aiAdvise);
		const aiMovieListWithUserId = aiMovieList.map((movie) => {
			return { ...movie, userId: req.userId };
		});
		// console.log("AI movie list: ", aiMovieList);

		await AiMovie.insertMany(aiMovieListWithUserId, {
			ordered: false,
		});

		// const updatedUser = user;
		const updatedUser = await User.findById(req.userId);
		// console.log("updatedUser", updatedUser);
		if (!updatedUser) {
			return res.status(404).json({ error: "User not found during update" });
		}

		// console.log("AI request added to user: ", updatedUser);

		return res
			.status(200)
			.json({ user: updatedUser, token: updatedUser.createAuthToken() });
	} catch (error) {
		res.status(500).json({ errorMsg: "AI Request error", error });
	}
};

export default getUserAiRecs;
