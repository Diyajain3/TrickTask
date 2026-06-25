import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  ClipboardList,
  Calendar,
  ChevronLeft,
  ChevronRight,
  User,
} from "lucide-react";
import api from "../../api/axios";

const Sidebar = ({
  tasks,
  setActivePage,
  setSelectedCategory,
  mobileOpen,
  setMobileOpen,
}) => {
  const navigate = useNavigate();
  const [current, invert] = useState(false);
  const [active, setActive] = useState("dashboard");
  const [category, setCategory] = useState("");
  const user = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <>
      {/* Mobile backdrop overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <div
        className={`scrollbar-hide flex h-screen flex-shrink-0 flex-col overflow-y-auto border-r border-pink-100 bg-white shadow-lg transition-all duration-500 ease-in-out
          fixed inset-y-0 left-0 z-50 transform md:relative md:translate-x-0 ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          } ${current ? "w-[250px]" : "w-[80px] md:w-[80px] w-[250px]"}
        `}
      >
      {/* Main Content */}
      <div className="flex-1">
        {/* Toggle */}
        <div className="flex justify-between items-center p-4">
          <span className="font-extrabold text-pink-500 md:hidden">Menu</span>
          {/* Mobile Close X button */}
          <button 
            onClick={() => setMobileOpen(false)}
            className="text-pink-500 hover:text-pink-600 md:hidden flex items-center justify-center h-8 w-8 rounded-full hover:bg-pink-50"
          >
            <span className="text-xl font-bold">✕</span>
          </button>

          {/* Desktop Chevron toggle */}
          <div className="hidden md:block">
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
        </div>

        {/* Logo */}
        <div
          className={`px-6 ${
            current ? "text-left" : "flex justify-center"
          }`}
        >
          {current ? (
            <>
              <button 
                onClick={() => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/";
}}
                className="mb-4 rounded-xl border bg-pink-600 px-3 py-2 text-sm font-medium text-white transition hover:border-white hover:text-black"
              >
                Logout
              </button>

              <h1 
                onClick={() => navigate("/?home=true")}
                className="text-3xl font-extrabold text-pink-400 cursor-pointer hover:opacity-80 transition"
              >
                TrickTask
              </h1>

              <p className="mt-1 text-sm text-black">
                Smart Task Manager
              </p>
            </>
          ) : (
            <h1 
              onClick={() => navigate("/?home=true")}
              className="text-2xl font-black text-black cursor-pointer hover:opacity-80 transition"
            >
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
              if (setMobileOpen) setMobileOpen(false);
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
              if (setMobileOpen) setMobileOpen(false);
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
              if (setMobileOpen) setMobileOpen(false);
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
                      if (setMobileOpen) setMobileOpen(false);
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
          <div className={`flex items-center gap-3 rounded-2xl transition hover:bg-pink-100 ${
            current ? "bg-pink-50 p-3" : "justify-center p-1"
          }`}>
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-pink-500 shadow-md">
              <User size={22} className="text-white" />
            </div>

            {current && (
              <div>
                <p className="text-sm font-medium text-black">
                  {user.name}
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
    </>
  );
};

export default Sidebar;