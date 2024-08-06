import { AI_REQ_MOVIES_PER_REQ } from "../config.js";

const aiPromt = (
	userList,
	companion,
	birthYear = 1981,
	country = "Germany",
	exludeList = [],
) => {
	const moviesAndRateList = userList
		.map((movie) => ({
			title: movie.movie?.title,
			rating: movie.rating || 0,
		}))
		.sort((a, b) => b.rating - a.rating)
		.slice(0, 10);

	const moviesAndRateString = moviesAndRateList.reduce((acc, movie) => {
		return `${acc}\n  ${movie.title} — My rating: ${movie.rating}/10`;
	}, "");
	// console.log("moviesAndRate: ", moviesAndRateString);
	const dayOfWeek = new Date().getDay();
	const dayNames = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const currentDayName = dayNames[dayOfWeek];

	return `
I need your movie expertise! I was born ${birthYear} and live in ${country} looking for the perfect film for today, ${currentDayName}. I'm planning to watch it with my ${companion}.
To help you narrow down the options, here is the history of my watched movies and ratings: ${moviesAndRateString}
Please exlude the following movies from your recommendations: ${exludeList.join(", ")}
Can you recommend a movie based on my preferences and day of week? Answer should contain ${AI_REQ_MOVIES_PER_REQ} movies not from my history and be only in JSON schema:
[ "title" ]
`;
};

export default aiPromt;