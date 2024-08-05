import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import MovieListItemSchema from "./movieListItemSchema.js";
// import AiMovieListItemSchema from "./aiMovieListItemSchema.js";

import {
	JWT_EXPIRATION,
	JWT_SECRET,
	AI_REQ_DAILY_LIMIT,
	AI_REQ_MOVIES_PER_REQ,
} from "../utils/config.js";

const dateMinusXYears = (x) => {
	const curDate = new Date();
	return new Date(curDate.setFullYear(curDate.getFullYear() - x));
};

const UserSchema = new Schema(
	{
		email: {
			type: String,
			required: true,
			trim: true,
			lowercase: true,
			unqiue: true,
			validate: [
				{
					validator: (email) => {
						return /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
					},
					message: (props) => `${props.value} is not a valid email address`,
				},
				{
					validator: async function (email) {
						const user = await this.constructor.findOne({ email });
						return !user;
					},
					message: (props) => `${props.value} is already in use`,
				},
			],
		},
		password: {
			type: String,
			required: [true, "Password is required"],
			minlength: [8, "Password must be at least 8 characters long"],
			validate: {
				validator: (password) => /\d/.test(password),
				message: "Password must contain at least one digit",
			},
		},
		passwordConfirmation: {
			type: String,
			required: [true, "Password confirmation is required"],
			validate: {
				validator: function (passwordConfirmation) {
					return passwordConfirmation === this.password;
				},
				message: "Passwords do not match",
			},
		},
		tocAgreement: {
			type: Boolean,
			required: [true, "Terms and conditions must be accepted"],
		},
		dpAgreement: {
			type: Boolean,
			required: [true, "Data protection policy must be accepted"],
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
		birthYear: {
			type: String,
			min: [1900, "Year of birth must be after 1900"],
			max: [dateMinusXYears(13), "You must be at least 14 years old"],
		},
		countryCode: {
			type: Number,
			min: 100,
			max: 999,
		},
		movieList: [MovieListItemSchema],

	},
	{ timestamps: true },
);

UserSchema.index({ email: 1 }, { unique: true });

UserSchema.pre("save", async function (next) {
	if (this.isModified("password")) {
		this.password = await bcrypt.hash(this.password, 10); //TODO: Add salt
		this.passwordConfirmation = undefined;
		this.tocAgreement = undefined;
		this.dpAgreement = undefined;
	}
	next();
});

UserSchema.methods.checkPassword = async function (password) {
	return await bcrypt.compare(password, this.password);
};

UserSchema.methods.createAuthToken = function () {
	return jwt.sign(
		{ id: this._id.toString(), email: this.email, isAdmin: this.isAdmin },
		JWT_SECRET,
		{
			expiresIn: JWT_EXPIRATION,
		},
	);
};

UserSchema.virtual('movieAiRecs', {
	ref: 'AiMovie',
	localField: '_id',
	foreignField: 'userId'
});

UserSchema.pre(/^find/, function (next) {
	this.populate({
		path: "movieList.movie",
		select:
			"id title release_date poster_path runtime genres_list.name vote_average vote_count",
	})
	.populate("movieAiRecs");
	next();
});

UserSchema.set("toJSON", {
	virtuals: true,
	transform: (document, returnedObject) => {
		returnedObject.movieList = returnedObject.movieList.map((movie) => {
			movie.id = movie._id?.toString();
			movie._id = undefined;
			return movie;
		});
		returnedObject.aiRequestsLimit = AI_REQ_DAILY_LIMIT;
		returnedObject.aiReqMoviesPerReq = AI_REQ_MOVIES_PER_REQ;
		returnedObject.id = returnedObject._id?.toString();
		returnedObject._id = undefined;
		returnedObject.__v = undefined;
		returnedObject.password = undefined;
	},
});

const User = model("User", UserSchema);

export default User;
