import React from "react";
import { Square, SquareCheckBig, Trash2 } from "lucide-react";
import api from "../../api/axios";

const AllTask = ({ tasks = [], setTasks, filter }) => {

  const toggleTask = async (id) => {
    try {
      await api.patch(`/tasks/${id}/toggle`);
      setTasks(
        tasks.map((task) =>
          task._id === id
            ? { ...task, completed: !task.completed }
            : task
        )
      );
    } catch (err) {
      console.error("Error toggling task:", err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  const filteredTasks =
    filter && filter !== "all"
      ? tasks.filter((task) => task.category === filter)
      : tasks;

  return (
    <div className="flex-1 bg-pink-50 p-6 overflow-y-auto">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          All Tasks
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage and track your tasks efficiently
        </p>
      </div>

      {/* TASK BOX */}
      <div className="rounded-3xl bg-white p-6 shadow-sm border border-pink-100">

        {/* COUNT */}
        <h2 className="mb-5 text-lg font-semibold text-pink-500">
          Total Tasks ({filteredTasks.length})
        </h2>

        {/* TASK LIST */}
        <div className="space-y-3">

          {filteredTasks.map((task) => (
            <div
              key={task._id}
              onClick={() => toggleTask(task._id)}
              className="
                flex items-center justify-between
                rounded-2xl border border-pink-100
                px-5 py-3
                cursor-pointer
                bg-white
                hover:shadow-md hover:scale-[1.01]
                transition-all duration-200
              "
            >

              {/* LEFT SIDE */}
              <div className="flex items-center gap-4">

                {task.completed ? (
                  <SquareCheckBig size={20} className="text-green-500" />
                ) : (
                  <Square size={20} className="text-pink-500" />
                )}

                <div className="flex flex-col">
                  <p
                    className={`text-sm md:text-base ${
                      task.completed
                        ? "line-through text-gray-400"
                        : "text-gray-800"
                    }`}
                  >
                    {task.title}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                    <span className="bg-pink-50 px-2 py-0.5 rounded-full">
                      {task.category}
                    </span>
                    <span>Due: {task.dueDate}</span>
                  </div>
                </div>
              </div>

              {/* DELETE */}
              <Trash2
                size={18}
                className="text-pink-400 hover:text-red-500 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTask(task._id);
                }}
              />

            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default AllTask;