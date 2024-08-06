import { Schema, model } from "mongoose";

const AiMovieSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	tmdbMovieId: {
		type: Number,
		required: true,
		// unique: true,
	},
	title: {
		type: String,
		required: true,
	},
	releaseDate: {
		type: String,
	},
	poster_path: {
		type: String,
	},
	vote_average: {
		type: Number,
	},
	vote_count: {
		type: Number,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		index: { expires: 60 * 60 * 1 },
	},
});

const AiMovie = model("AiMovie", AiMovieSchema);

export default AiMovie;
