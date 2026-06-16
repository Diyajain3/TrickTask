import React from "react";
import { Square, SquareCheckBig, Trash2 } from "lucide-react";

const Category = ({
  tasks,
  setTasks,
  selectedCategory,
}) => {
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    );
  };

  const filteredTasks = tasks.filter(
    (task) =>
      task.category?.toLowerCase() ===
      selectedCategory?.toLowerCase()
  );

  const title = selectedCategory
    ? selectedCategory.charAt(0).toUpperCase() +
      selectedCategory.slice(1)
    : "Category";

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          {title} Tasks
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          View and manage {title.toLowerCase()} tasks
        </p>
      </div>

      {/* Category Card */}
      <div className="rounded-3xl border border-pink-100 bg-white p-5 shadow-md">
        <h2 className="mb-4 text-xl font-semibold text-pink-500">
          {title} ({filteredTasks.length})
        </h2>

        {filteredTasks.length === 0 ? (
          <p className="text-sm text-gray-400">
            No tasks available
          </p>
        ) : (
          filteredTasks.map((task) => (
            <div
              key={task.id}
              onClick={() => toggleTask(task.id)}
              className="mb-3 flex cursor-pointer flex-col gap-4 rounded-2xl border border-pink-100 bg-white px-5 py-4 transition-all duration-300 hover:border-pink-300 hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
            >
              {/* Left Side */}
              <div className="flex items-center gap-4">
                {task.completed ? (
                  <SquareCheckBig
                    size={20}
                    className="flex-shrink-0 text-green-500"
                  />
                ) : (
                  <Square
                    size={20}
                    className="flex-shrink-0 text-pink-500"
                  />
                )}

                <div>
                  <p
                    className={`text-[15px] md:text-base ${
                      task.completed
                        ? "line-through text-gray-400"
                        : "text-gray-800"
                    }`}
                  >
                    {task.title}
                  </p>

                  <div className="mt-1 flex items-center gap-3 text-xs text-gray-500">
                    <span className="rounded-full bg-pink-50 px-2 py-1">
                      {task.category}
                    </span>

                    <span>
                      Due: {task.dueDate}
                    </span>
                  </div>
                </div>
              </div>

              {/* Delete */}
              <Trash2
                size={18}
                className="text-pink-400 transition hover:text-red-500"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTask(task.id);
                }}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Category;