import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dns from "dns";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import connectDB from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import taskRouter from "./routes/taskRoutes.js";

dns.setDefaultResultOrder("ipv4first");
dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Prevent long buffering queries if database connection is offline/failed
app.use("/api", (req, res, next) => {
  if (mongoose.connection.readyState === 0 || mongoose.connection.readyState === 3) {
    return res.status(503).json({
      message: "Database is currently offline. Please check if MONGO_URI is set correctly in your environment variables.",
    });
  }
  next();
});

app.use("/api/users", userRouter);
app.use("/api/tasks", taskRouter);

// Serve frontend static build files
const frontendBuildPath = path.join(__dirname, "../frontend/dist");
app.use(express.static(frontendBuildPath));

// Fallback to React index.html for all non-API routes
app.get("/*splat", (req, res) => {
  res.sendFile(path.join(frontendBuildPath, "index.html"));
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running");
});