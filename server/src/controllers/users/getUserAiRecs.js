import User from "../../models/user.js";

const getUserAiRecs = async (req, res) => {
	try {
		const user = await User.findById(req.userId);
		// const updatedUser = await User.findByIdAndUpdate(
		// 	req.userId,
		// 	{ $push: { movieList: req.body.movie } },
		// 	{ new: true }
		// );

		if (!user) {
			return res.status(401).json({ error: "Invalid ID" });
		}
		if (user.movAIRecs.length >= user.aiRequestsLimit) {
			return res.status(400).json({ error: "AI requests limit reached" });
		}
		const aiAdvise = 
			{ movie: "66ad00fe34e1d18214a96173", tmdbMovieId: 903629 }
		;
		
		// console.log("AI request: ", aiAdvise);
		// user.movAIRecs = [...user.movAIRecs, aiAdvise];

		const updatedUser = await User.findOneAndUpdate(
			{ _id: req.userId },
			{ $push: { movAIRecs: aiAdvise } },

			{ new: true },
		);
			
			console.log("AI request added to user: ", updatedUser);
		// const updatedUser = user;
		return res
			.status(200)
			.json({ user: updatedUser, token: updatedUser.createAuthToken() });
	} catch (error) {
		res.status(500).json({ errorMsg: "AI Request error", error });
	}
};

export default getUserAiRecs;
