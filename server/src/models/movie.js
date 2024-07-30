import { Schema, model } from "mongoose";

const MovieSchema = new Schema({
	tmdb_id: {
		type: Number,
		required: [true, "TMDB ID is required"],
		unique: true,
	},
	title: {
		type: String,
		required: [true, "Title is required"],
		trim: true,
	},
	original_title: {
		type: String,
		trim: true,
	},
	runtime: {
		type: Number,
	},
	release_date: {
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
	overview: {
		type: String,
	},
    req_count: {
        type: Number,
        default: 1,
    },
    add_waitng_list_count: {
        type: Number,
        default: 0,
    },
	genres_list: [
		{
			name: {
				type: String,
				required: true,
			},
		},
	],
	cast: [
		{
			tmdb_id: {
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
			profile_path: {
				type: String,
			},
		},
	],
	crew: [
		{
			tmdb_id: {
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
            url: {
                type: String,
                required: true,
            },
            name: {
                type: String
            }
        },
    ],
}, { timestamps: true });

MovieSchema.index({ tmdb_id: 1 });

const Movie = model("Movie", MovieSchema);

export default Movie;