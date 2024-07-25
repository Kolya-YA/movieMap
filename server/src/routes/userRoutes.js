import express from "express";

import {
	createNewUser,
	getAllUsers,
	loginUser,
    updateUser,
	getUser,
} from "../controllers/users/index.js";

import { verifyToken, isAdmin, isOwner } from "../middleware/index.js";

const userRoutes = express.Router();

userRoutes.post("/", createNewUser);
userRoutes.post("/login", loginUser);

userRoutes.get("/", verifyToken, getUser);
userRoutes.put("/", verifyToken, isOwner, updateUser);
// userRoutes.delete("/:userId", verifyToken, isOwner, getAllUsers);

userRoutes.get("/:userId", verifyToken, isAdmin, getAllUsers);
userRoutes.get("/all", verifyToken, isAdmin, getAllUsers);

export default userRoutes;
