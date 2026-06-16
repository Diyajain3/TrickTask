import { Filter, PlusIcon } from "lucide-react";
import React, { useState } from "react";

const NavDash = ({
  tasks,
  setTasks,
  setSelectedCategory,
  setActivePage,
}) => {
  const [selectedInfo, setSelectedInfo] = useState("");
  const [form, setForm] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border-b border-pink-100 bg-white px-4 py-5 sm:px-6 md:px-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        {/* Left */}
        <div>
          <h1 className="text-2xl font-bold md:text-4xl">
            Dashboard
          </h1>

          <p className="mt-1 text-sm text-pink-800">
            {tasks.length} active tasks
          </p>
        </div>

        {/* Right */}
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center md:w-auto">
          {/* Filter */}
          {/* Filter */}
<div className="relative">
  <button
    className="flex items-center justify-center gap-2 rounded-2xl border-2 border-pink-500 px-4 py-2 font-medium text-pink-500 transition hover:bg-pink-50"
    onClick={() => {
      setOpen(!open);
      setSelectedInfo("");
    }}
  >
    <Filter size={18} />
    Filter
  </button>

  {/* Category Dropdown */}
  {open && (
    <div className="absolute right-0 top-12 z-50 w-44 rounded-2xl border border-pink-100 bg-white p-2 shadow-xl">
      <button
        className="block w-full rounded-xl px-3 py-2 text-left text-sm hover:bg-pink-50"
        onClick={() => setSelectedInfo("work")}
      >
        Work
      </button>

      <button
        className="block w-full rounded-xl px-3 py-2 text-left text-sm hover:bg-pink-50"
        onClick={() => setSelectedInfo("personal")}
      >
        Personal
      </button>

      <button
        className="block w-full rounded-xl px-3 py-2 text-left text-sm hover:bg-pink-50"
        onClick={() => setSelectedInfo("meeting")}
      >
        Meetings
      </button>

      <button
        className="block w-full rounded-xl px-3 py-2 text-left text-sm hover:bg-pink-50"
        onClick={() => setSelectedInfo("urgent")}
      >
        Urgent
      </button>
    </div>
  )}

  {/* Info Card */}
  {selectedInfo && (
  <div className="absolute top-12 left-48 z-50 w-72 rounded-2xl border border-pink-100 bg-white p-4 shadow-xl">
    <h3 className="text-lg font-semibold capitalize text-pink-500">
      {selectedInfo}
    </h3>

    <p className="mt-2 text-sm text-gray-600">
      {
        tasks.filter(
          (task) =>
            task.category?.toLowerCase() === selectedInfo
        ).length
      }{" "}
      tasks available
    </p>

    <div className="mt-3 max-h-40 space-y-2 overflow-y-auto">
      {tasks
        .filter(
          (task) =>
            task.category?.toLowerCase() === selectedInfo
        )
        .map((task) => (
          <div
            key={task.id}
            className="rounded-xl border border-pink-100 bg-pink-50 p-2"
          >
            <p className="text-sm font-medium text-gray-700">
              {task.title}
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Due: {task.dueDate}
            </p>
          </div>
        ))}
    </div>

    <button
      className="mt-4 w-full rounded-xl bg-pink-500 py-2 text-white transition hover:bg-pink-600"
      onClick={() => {
        setSelectedCategory(selectedInfo);
        setActivePage("category");
        setOpen(false);
        setSelectedInfo("");
      }}
    >
      View All Tasks
    </button>
  </div>
)}
</div>
          {/* Create Task */}
          <button
            onClick={() => setForm(true)}
            className="flex items-center justify-center gap-2 rounded-2xl bg-pink-500 px-4 py-2 font-medium text-white shadow-md transition-all duration-200 hover:bg-pink-600 hover:shadow-lg"
          >
            <PlusIcon size={18} />
            Create Task
          </button>
        </div>
      </div>

      {/* Modal */}
      {form && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="w-[90%] max-w-md rounded-3xl bg-white p-6 shadow-2xl">
            <h2 className="mb-4 text-xl font-bold text-gray-800">
              Create Task
            </h2>

            <div className="space-y-4">
              <input
                placeholder="Task title"
                className="w-full rounded-xl border border-pink-200 p-3 outline-none focus:border-pink-500"
                id="title"
              />

              <select
                className="w-full rounded-xl border border-pink-200 p-3 outline-none focus:border-pink-500"
                id="category"
              >
                <option value="work">Work</option>
                <option value="personal">Personal</option>
                <option value="meeting">Meetings</option>
                <option value="urgent">Urgent</option>
              </select>

              <input
                type="date"
                className="w-full rounded-xl border border-pink-200 p-3 outline-none focus:border-pink-500"
                id="dueDate"
              />

              <button
                className="w-full rounded-xl bg-pink-500 py-3 font-medium text-white transition hover:bg-pink-600"
                onClick={() => {
                  const title =
                    document.getElementById("title").value;
                  const category =
                    document.getElementById("category").value;
                  const dueDate =
                    document.getElementById("dueDate").value;

                  if (!title.trim()) return;

                  setTasks((prev) => [
                    ...prev,
                    {
                      id: Date.now(),
                      title,
                      category,
                      dueDate,
                      completed: false,
                    },
                  ]);

                  setForm(false);
                }}
              >
                Add Task
              </button>

              <button
                className="w-full rounded-xl border border-gray-200 py-3 text-gray-600 transition hover:bg-gray-50"
                onClick={() => setForm(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavDash;