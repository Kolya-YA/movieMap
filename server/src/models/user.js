import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_EXPIRATION, JWT_SECRET } from "../utils/config.js";

const UserSchema = new Schema(
	{
		email: {
			type: String,
			required: true,
			trim: true,
			lowercase: true,
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
						if (user && user.id !== this.id) {
							return false;
						}
						return true;
					},
					message: (props) => `The email ${props.value} is already taken`,
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
			type: Number,
			min: [1900, "Year of birth must be after 1900"],
			max: [new Date().getFullYear() - 13, "You must be at least 14 years old"],
		},
		countryCode: {
			type: Number,
			min: 100,
			max: 999,
		},
		movieList: [
			{
				tmdbMovieId: {
					type: Number,
					ref: "Movie",
					required: true,
					unqiue: true,
				},
				dateOfAdded: {
					type: Date,
					default: Date.now,
				},
				dateOfWatch: {
					type: Date
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
			},
		],
		movAIRecs: [],
	},
	{ timestamps: true },
);

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

UserSchema.set("toJSON", {
	transform: (document, returnedObject) => {
		returnedObject.movieList = returnedObject.movieList.map((movie) => {
			movie.id = movie._id?.toString();
			movie._id = undefined;
			return movie;
		});
		returnedObject.id = returnedObject._id?.toString();
		returnedObject._id = undefined;
		returnedObject.__v = undefined;
		returnedObject.password = undefined;
	},
});

const User = model("User", UserSchema);

export default User;
