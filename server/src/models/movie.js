import { Schema, model } from "mongoose";

const MovieSchema = new Schema({
	tmdbId: {
		type: Number,
		required: [true, "TMDB ID is required"],
		unique: true,
	},
	title: {
		type: String,
		required: [true, "Title is required"],
		trim: true,
	},
	originalTitle: {
		type: String,
		trim: true,
	},
	runtime: {
		type: Number,
	},
	releaseDate: {
		type: String,
	},
	posterPath: {
		type: String,
	},
	voteAverage: {
		type: Number,
	},
	voteCount: {
		type: Number,
	},
	overview: {
		type: String,
	},
    reqCount: {
        type: Number,
        default: 0,
    },
    inWaitngListCounter: {
        type: Number,
        default: 0,
    },
	genresList: [
		{
			tmdbId: {
				type: Number,
				required: true,
			},
			name: {
				type: String,
				required: true,
			},
		},
	],
	cast: [
		{
			tmdbId: {
				type: Number,
				required: true,
			},
			name: {
				type: String,
				required: true,
			},
			character: {
				type: String,
				required: true,
			},
			order: {
				type: Number,
			},
			proflilePath: {
				type: String,
			},
		},
	],
	crew: [
		{
			tmdbId: {
				type: Number,
				required: true,
			},
			name: {
				type: String,
				required: true,
			},
			job: {
				type: String,
				required: true,
			},
			proflilePath: {
				type: String,
			},
		},
	],
    trailers: [
        {
            key: {
                type: String,
                required: true,
            },
            name: {
                type: String
            },
            type: {
                type: String,
                required: true,
            },
            official: {
                type: Boolean,
                required: true,
            },
            site: {
                type: String,
                required: true,
            },
        },
    ],
}, { timestamps: true });

const Movie = model("Movie", MovieSchema);

export default Movie;