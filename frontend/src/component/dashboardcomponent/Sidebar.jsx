import React, { useState } from "react";
import {
  LayoutDashboard,
  ClipboardList,
  Calendar,
  ChevronLeft,
  ChevronRight,
  User,
} from "lucide-react";

const Sidebar = ({
  tasks,
  setActivePage,
  setSelectedCategory,
}) => {
  const [current, invert] = useState(false);
  const [active, setActive] = useState("dashboard");
  const [category, setCategory] = useState("");

  return (
    <div
      className={`scrollbar-hide flex h-screen flex-shrink-0 flex-col overflow-y-auto border-r border-pink-100 bg-white shadow-lg transition-all duration-500 ease-in-out ${
        current ? "w-[250px]" : "w-[80px]"
      }`}
    >
      {/* Main Content */}
      <div className="flex-1">
        {/* Toggle */}
        <div className="flex justify-end p-4">
          {current ? (
            <ChevronLeft
              size={24}
              onClick={() => invert(false)}
              className="cursor-pointer text-pink-500 transition-all duration-300 hover:scale-110"
            />
          ) : (
            <ChevronRight
              size={24}
              onClick={() => invert(true)}
              className="cursor-pointer text-pink-500 transition-all duration-300 hover:scale-110"
            />
          )}
        </div>

        {/* Logo */}
        <div
          className={`px-6 ${
            current ? "text-left" : "flex justify-center"
          }`}
        >
          {current ? (
            <>
              <button className="mb-4 rounded-xl border bg-pink-600 px-3 py-2 text-sm font-medium text-white transition hover:border-white hover:text-black">
                Logout
              </button>

              <h1 className="text-3xl font-extrabold text-pink-400">
                TrickTask
              </h1>

              <p className="mt-1 text-sm text-black">
                Smart Task Manager
              </p>
            </>
          ) : (
            <h1 className="text-2xl font-black text-black">
              TT
            </h1>
          )}
        </div>

        {/* Navigation */}
        <div className="mt-10 flex flex-col gap-3 px-3">
          <button
            onClick={() => {
              setActive("dashboard");
              setActivePage("dashboard");
            }}
            className={`flex items-center gap-3 rounded-2xl px-4 py-3 font-semibold transition ${
              active === "dashboard"
                ? "bg-pink-500 text-white"
                : "text-black hover:bg-pink-50"
            }`}
          >
            <LayoutDashboard size={22} />
            {current && <span>Dashboard</span>}
          </button>

          <button
            onClick={() => {
              setActive("tasks");
              setActivePage("Alltask");
            }}
            className={`flex items-center gap-3 rounded-2xl px-4 py-3 font-semibold transition ${
              active === "tasks"
                ? "bg-pink-500 text-white"
                : "text-black hover:bg-pink-50"
            }`}
          >
            <ClipboardList size={22} />
            {current && <span>All Tasks</span>}
          </button>

          <button
            onClick={() => {
              setActive("calendar");
              setActivePage("calendar");
            }}
            className={`flex items-center gap-3 rounded-2xl px-4 py-3 font-semibold transition ${
              active === "calendar"
                ? "bg-pink-500 text-white"
                : "text-black hover:bg-pink-50"
            }`}
          >
            <Calendar size={22} />
            {current && <span>Calendar</span>}
          </button>
        </div>

        {/* Categories */}
        {current && (
          <div className="mt-10 px-6">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-gray-500">
              Categories
            </h3>

            <div className="flex flex-col gap-3">
              {["work", "personal", "meeting", "urgent"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setCategory(item);
                      setSelectedCategory(item);
                      setActive("category");
                      setActivePage("category");
                    }}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      category === item
                        ? "bg-pink-400 text-white shadow-md"
                        : "bg-pink-50 text-black hover:bg-pink-100"
                    }`}
                  >
                    {item.charAt(0).toUpperCase() +
                      item.slice(1)}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </div>

      {/* Bottom */}
      <div>
        {current && (
          <div className="p-4">
            <div className="rounded-3xl bg-pink-500 p-5 text-white shadow-xl">
              <h3 className="text-lg font-semibold">
                Task Overview
              </h3>

              <p className="mt-2 text-6xl font-black">
                {tasks.length}
              </p>

              <p className="text-pink-100">
                Active Tasks
              </p>
            </div>
          </div>
        )}

        {/* Profile */}
        <div className="border-t border-pink-100 p-4">
          <div className="flex items-center gap-3 rounded-2xl bg-pink-50 p-3 transition hover:bg-pink-100">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-500 shadow-md">
              <User size={22} className="text-white" />
            </div>

            {current && (
              <div>
                <p className="text-sm font-medium text-black">
                  Diya
                </p>

                <p className="text-xs text-gray-500">
                  My Profile
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;