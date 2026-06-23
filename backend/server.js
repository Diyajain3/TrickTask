import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dns from "dns";

import connectDB from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import taskRouter from "./routes/taskRoutes.js";

dns.setDefaultResultOrder("ipv4first");
dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/tasks", taskRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running");
});