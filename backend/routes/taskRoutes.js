import express from "express";
import protect from "../middlewares/authMiddleware.js";
import {
  createTask,
  deleteTask,
  
  getTasks,
  toggleTaskStatus,
} from "../controllers/taskController.js";

const taskRouter = express.Router();

taskRouter.post("/create", protect, createTask);

taskRouter.get("/", protect, getTasks);

taskRouter.delete("/:taskId", protect, deleteTask);

taskRouter.patch("/:taskId/toggle", protect, toggleTaskStatus);

export default taskRouter;