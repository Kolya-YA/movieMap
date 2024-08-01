import express from "express";

import {
	createNewUser,
	getAllUsers,
	loginUser,
	getUser,
	postMovieToUserList,
	toggleMovieInUserList,
	updateMovieInUserList,
} from "../controllers/users/index.js";

import { verifyToken, isAdmin, isOwner } from "../middleware/index.js";

const userRoutes = express.Router();

userRoutes.post("/", createNewUser);
userRoutes.post("/login", loginUser);

userRoutes.get("/", verifyToken, getUser);
// userRoutes.put("/", verifyToken, isOwner, updateUserMovie);
userRoutes.post("/add-movie", verifyToken, isOwner, postMovieToUserList);
userRoutes.post("/toggle-movie", verifyToken, isOwner, toggleMovieInUserList);
userRoutes.put("/update-movie", verifyToken, isOwner, updateMovieInUserList);

// userRoutes.delete("/:userId", verifyToken, isOwner, getAllUsers);

userRoutes.get("/:userId", verifyToken, isAdmin, getAllUsers);
userRoutes.get("/all", verifyToken, isAdmin, getAllUsers);

export default userRoutes;
