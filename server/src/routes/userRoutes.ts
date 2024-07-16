import express from "express";

import getAllUsers from "../controllers/users/getAllUsers";

import isAuth from "../middleware/isAuth";
import isAdmin from "../middleware/isAdmin";

const userRoutes = express.Router();

userRoutes.post("/", getAllUsers);
userRoutes.post("/login", getAllUsers);
userRoutes.get("/", isAuth, isAdmin, getAllUsers);
userRoutes.get("/:id", isAuth, isAdmin, getAllUsers);
userRoutes.put("/:id", isAuth, isAdmin, getAllUsers);
userRoutes.delete("/:id", isAuth, isAdmin, getAllUsers);

export default userRoutes;
