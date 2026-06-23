import Task from "../models/Task.js";

// ================= CREATE TASK =================
// POST: /api/tasks/create

export const createTask = async (req, res) => {
  try {
    const userId = req.userId;

    const { title, category, dueDate } = req.body;

    const task = await Task.create({
      title,
      category,
      dueDate,
      user: userId,
    });

    return res.status(201).json({
      message: "Task created successfully",
      task,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// ================= GET ALL TASKS =================
// GET: /api/tasks

export const getTasks = async (req, res) => {
  try {
    const userId = req.userId;

    const tasks = await Task.find({
      user: userId,
    }).sort({ createdAt: -1 });

    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// ================= DELETE TASK =================
// DELETE: /api/tasks/:taskId

export const deleteTask = async (req, res) => {
  try {
    const userId = req.userId;
    const { taskId } = req.params;

    const task = await Task.findOneAndDelete({
      _id: taskId,
      user: userId,
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    return res.status(200).json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// ================= TOGGLE COMPLETE =================
// PATCH: /api/tasks/:taskId/toggle

export const toggleTaskStatus = async (req, res) => {
  try {
    const userId = req.userId;
    const { taskId } = req.params;

    const task = await Task.findOne({
      _id: taskId,
      user: userId,
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    task.completed = !task.completed;

    await task.save();

    return res.status(200).json({
      message: task.completed
        ? "Task completed"
        : "Task marked incomplete",
      task,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};