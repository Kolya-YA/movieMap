import express from "express";

import { createNewUser, getAllUsers, loginUser } from "../controllers/users/index.js";

import { verifyToken, isAdmin, isOwner } from "../middleware/index.js";


const userRoutes = express.Router();

userRoutes.post("/", createNewUser);
userRoutes.post("/login", loginUser)

userRoutes.get("/:userId", verifyToken, isOwner, getAllUsers);
// userRoutes.put("/:userId", verifyToken, isOwner, getAllUsers);
// userRoutes.delete("/:userId", verifyToken, isOwner, getAllUsers);

userRoutes.get("/", verifyToken, isAdmin, getAllUsers);

export default userRoutes;
