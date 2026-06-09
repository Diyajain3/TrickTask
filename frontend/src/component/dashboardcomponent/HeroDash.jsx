import NavDash from "./NavDash";
import { Square, SquareCheckBig, Trash2 } from "lucide-react";
import { useState } from "react";
import React from "react";

const HeroDash = ({ tasks, setTasks, filter }) => {
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const today = new Date().toISOString().split("T")[0];

  const overdueTasks = tasks.filter(
    (task) => task.dueDate < today && !task.completed,
  );

  const todayTasks = tasks.filter(
    (task) => task.dueDate === today && !task.completed,
  );

  const completedTasks = tasks.filter((task) => task.completed);
  return (
    <div className="min-h-screen space-y-6 overflow-y-auto bg-pink-50 p-4 md:p-8">
      <NavDash tasks={tasks} setTasks={setTasks} filter={filter} />

      {/* Overdue Section */}
      <div className="rounded-3xl border border-pink-100 bg-white p-5 shadow-md">
        <h2 className="mb-4 text-xl text-pink-500">
          Overdue ({overdueTasks.length})
        </h2>

        {overdueTasks.map((task) => (
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
                <Square size={20} className="flex-shrink-0 text-pink-500" />
              )}

              <div>
                <p
                  className={`text-[15px] md:text-base ${
                    task.completed
                      ? "text-gray-400 line-through"
                      : "text-gray-800"
                  }`}
                >
                  {task.title}
                </p>

                <div className="mt-1 flex items-center gap-3 text-xs text-gray-500">
                  <span className="rounded-full bg-pink-50 px-2 py-1">
                    {task.category}
                  </span>

                  <span>Due: {task.dueDate}</span>
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
        ))}
      </div>

      {/* Today Section */}
      <div className="rounded-3xl border border-pink-100 bg-white p-5 shadow-md">
        <h2 className="mb-4 text-xl text-pink-500">
          Today ({todayTasks.length})
        </h2>

        {todayTasks.map((task) => (
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
                <Square size={20} className="flex-shrink-0 text-pink-500" />
              )}

              <div>
                <p
                  className={`text-[15px] md:text-base ${
                    task.completed
                      ? "text-gray-400 line-through"
                      : "text-gray-800"
                  }`}
                >
                  {task.title}
                </p>

                <div className="mt-1 flex items-center gap-3 text-xs text-gray-500">
                  <span className="rounded-full bg-pink-50 px-2 py-1">
                    {task.category}
                  </span>

                  <span>Due: {task.dueDate}</span>
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
        ))}
      </div>

      {/* Completed Section */}
      <div className="rounded-3xl border border-pink-100 bg-white p-5 shadow-md">
        <h2 className="mb-4 text-xl text-pink-500">
          Completed ({completedTasks.length})
        </h2>

        {completedTasks.map((task) => (
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
                <Square size={20} className="flex-shrink-0 text-pink-500" />
              )}

              <div>
                <p
                  className={`text-[15px] md:text-base ${
                    task.completed
                      ? "text-gray-400 line-through"
                      : "text-gray-800"
                  }`}
                >
                  {task.title}
                </p>

                <div className="mt-1 flex items-center gap-3 text-xs text-gray-500">
                  <span className="rounded-full bg-pink-50 px-2 py-1">
                    {task.category}
                  </span>

                  <span>Due: {task.dueDate}</span>
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
        ))}
      </div>

      
    </div>
  );
};

export default HeroDash;
