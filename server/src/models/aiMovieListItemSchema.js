import { Schema } from "mongoose";

const AiMovieListItemSchema = new Schema({
	tmdbMovieId: {
		type: Number,
		required: true,
		unqiue: true,
	},
	title: {
		type: String,
		required: true,
	},
	realeaseDate: {
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
	expireAt: {
		type: Date,
		default: Date.now
	},
});

AiMovieListItemSchema.index({ expireAt: 1 }, { expireAfterSeconds: 60 });

export default AiMovieListItemSchema;
