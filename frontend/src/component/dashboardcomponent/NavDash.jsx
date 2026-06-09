import { Filter, PlusIcon } from "lucide-react";
import React, { useState } from "react";

const NavDash = ({ setTasks }) => {
  const [form, setForm] = useState(false);

  return (
    <div className="rounded-xl border-b border-pink-100 bg-white px-4 py-5 sm:px-6 md:px-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

        {/* Left */}
        <div>
          <h1 className="text-2xl font-bold md:text-4xl">
            Dashboard
          </h1>

          <p className="mt-1 text-sm text-pink-800">
            3 tasks due today
          </p>
        </div>

        {/* Right */}
        <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">

          <button className="flex items-center justify-center gap-2 rounded-2xl border-2 border-pink-500 px-2 py-2 text-pink-500">
            <Filter size={18} />
            Filter
          </button>

          {/* CREATE TASK BUTTON */}
          <button
            onClick={() => setForm(true)}
            className="flex items-center justify-center gap-2 rounded-2xl bg-pink-500 px-2 py-2 text-white"
          >
            <PlusIcon size={18} />
            Create Task
          </button>
        </div>
      </div>

      {/* MODAL */}
      {form && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
          <div className="w-80 space-y-3 rounded-2xl bg-white p-6">

            <h2 className="text-lg font-bold">Create Task</h2>

            <input
              placeholder="Task title"
              className="w-full border p-2"
              id="title"
            />

            <select className="w-full border p-2" id="category">
              <option value="work">Work</option>
              <option value="personal">Personal</option>
            </select>

            <input type="date" className="w-full border p-2" id="dueDate" />

            {/* ADD TASK */}
            <button
              className="w-full rounded-xl bg-pink-500 px-4 py-2 text-white"
              onClick={() => {
                const title = document.getElementById("title").value;
                const category = document.getElementById("category").value;
                const dueDate = document.getElementById("dueDate").value;

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

            {/* CANCEL */}
            <button
              className="w-full text-gray-500"
              onClick={() => setForm(false)}
            >
              Cancel
            </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default NavDash;