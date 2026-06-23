import express from "express";
import protect from "../middlewares/authMiddleware.js";
import { getUserById, getUserTasks, loginUser, registerUser } from "../controllers/userController.js";

const userRouter=express.Router();

userRouter.post('/signup',registerUser);
userRouter.post('/login',loginUser);
userRouter.get('/data',protect,getUserById);
userRouter.get('/tasks',protect,getUserTasks);

export default userRouter;