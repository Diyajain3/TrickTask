import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dns from "dns";
import path from "path";
import { fileURLToPath } from "url";

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