import { Schema } from "mongoose";

const MovieListItemSchema = new Schema({
	movie: {
		type: Schema.Types.ObjectId,
		ref: "Movie",
	},
	tmdbMovieId: {
		type: Number,
		required: true,
		unqiue: true,
	},
	dateOfAdded: {
		type: Date,
		default: Date.now,
	},
	dateOfWatch: {
		type: Date,
	},
	rating: {
		type: Number,
		min: 0,
		max: 10,
	},
	comment: {
		type: String,
		maxlength: 512,
	},
	deleted: {
		type: Number,
		default: 0,
	},
});

export default MovieListItemSchema;