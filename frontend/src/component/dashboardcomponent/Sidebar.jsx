import React, { useState } from "react";
import {
  LayoutDashboard,
  ClipboardList,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import HeroDash from "./HeroDash";
const Sidebar = ({ tasks, setFilter, setActivePage }) => {
  const [current, invert] = useState(true);
  const [active, setActive] = useState("dashboard");
  const [category, setCategory] = useState("");
  return (
    <div
      className={`scrollbar-hide flex h-screen flex-shrink-0 flex-col justify-between overflow-y-auto border-r border-pink-100 bg-white shadow-lg transition-all duration-500 ease-in-out ${current ? "w-[250px]" : "w-[80px]"}`}
    >
      {/* Top Section */}
      <div>
        {/* Toggle Button */}
        <div className="flex justify-end p-4">
          {current ? (
            <ChevronLeft
              size={24}
              onClick={() => invert(false)}
              className="cursor-pointer text-pink-500 transition-all duration-300 hover:scale-110 hover:text-pink-600"
            />
          ) : (
            <ChevronRight
              size={24}
              onClick={() => invert(true)}
              className="cursor-pointer text-pink-500 transition-all duration-300 hover:scale-110 hover:text-pink-600"
            />
          )}
        </div>

        {/* Logo */}
        <div
          className={`px-6 ${current ? "text-left" : "flex justify-center"}`}
        >
          {current ? (
            <>
              <h1 className="text-3xl font-extrabold text-pink-400">
                TrickTask
              </h1>

              <p className="mt-1 text-sm text-black">Smart Task Manager</p>
            </>
          ) : (
            <h1 className="text-2xl font-black text-black">TT</h1>
          )}
        </div>

        {/* Navigation */}
        <div className="mt-10 flex flex-col gap-3 px-3">
          <a
            href="#"
            onClick={() => {
              setActive("dashboard");
              setActivePage("dashboard");
            }}
            className={`flex items-center gap-3 rounded-2xl px-4 py-3 font-semibold text-black shadow-md ${
              active === "dashboard"
                ? "bg-pink-500 text-white shadow-md"
                : "text-black hover:bg-pink-50"
            }`}
          >
            <LayoutDashboard size={22} />
            {current && <span>Dashboard</span>}
          </a>

          <a
            href="#"
            className={`flex items-center gap-3 rounded-2xl px-4 py-3 font-semibold text-black shadow-md ${
              active === "tasks"
                ? "bg-pink-500 text-white shadow-md"
                : "text-black hover:bg-pink-50"
            }`}
            onClick={() => {
              setActive("tasks");
              setActivePage("Alltask");
            }}
          >
            <ClipboardList size={22} />
            {current && <span>All Tasks</span>}
          </a>

          <a
            href="#"
            className={`flex items-center gap-3 rounded-2xl px-4 py-3 font-semibold text-black shadow-md ${
              active === "calendar"
                ? "bg-pink-500 text-white shadow-md"
                : "text-black hover:bg-pink-50"
            }`}
            onClick={() => setActive("calendar")}
          >
            <Calendar size={22} />
            {current && <span>Calendar</span>}
          </a>
        </div>

        {/* Categories */}
        {current && (
          <div className="mt-10 px-6">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-gray-500">
              Categories
            </h3>

            <div className="flex flex-col gap-3">
              <div
                className={`rounded-full bg-pink-50 px-4 py-2 text-sm font-medium text-black ${
                  category === "work"
                    ? "bg-pink-400 text-white shadow-md"
                    : "text-black hover:bg-pink-50"
                }`}
                onClick={() => setCategory("work")}
              >
                Work
              </div>

              <div
                className={`rounded-full bg-pink-50 px-4 py-2 text-sm font-medium text-black ${
                  category === "personal"
                    ? "bg-pink-400 text-white shadow-md"
                    : "text-black hover:bg-pink-50"
                }`}
                onClick={() => setCategory("personal")}
              >
                Personal
              </div>

              <div
                className={`rounded-full bg-pink-50 px-4 py-2 text-sm font-medium text-black ${
                  category === "meeting"
                    ? "bg-pink-400 text-white shadow-md"
                    : "text-black hover:bg-pink-50"
                }`}
                onClick={() => setCategory("meeting")}
              >
                Meetings
              </div>

              <div
                className={`rounded-full bg-pink-50 px-4 py-2 text-sm font-medium text-black ${
                  category === "urgent"
                    ? "bg-pink-400 text-white shadow-md"
                    : "text-black hover:bg-pink-50"
                }`}
                onClick={() => setCategory("urgent")}
              >
                Urgent
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Card */}
      {current && (
        <div className="p-4">
          <div className="rounded-3xl bg-pink-500 p-5 text-white shadow-xl">
            <h3 className="text-lg font-semibold">Task Overview</h3>

            <p className="mt-2 text-6xl font-black">{tasks.length}</p>

            <p className="text-pink-100">Active Tasks</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
