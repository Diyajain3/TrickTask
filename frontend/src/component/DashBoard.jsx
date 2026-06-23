import React, { useState, useEffect } from "react";
import Sidebar from "./dashboardcomponent/Sidebar";
import HeroDash from "./dashboardcomponent/HeroDash";
import AllTask from "./dashboardcomponent/AllTask";
import CalendarPage from "./dashboardcomponent/CalendarPage";
import Category from "./dashboardcomponent/Category";
import api from "../api/axios";
import { Menu } from "lucide-react";

const DashBoard = () => {
  const [filter, setFilter] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [activePage, setActivePage] = useState("dashboard");
  const [tasks, setTasks] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get("/tasks");
        const formatted = response.data.map((task) => ({
          ...task,
          dueDate: task.dueDate ? task.dueDate.split("T")[0] : "No date",
        }));
        setTasks(formatted);
      } catch (err) {
        console.error("Error fetching tasks:", err);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        tasks={tasks}
        setFilter={setFilter}
        setActivePage={setActivePage}
        setSelectedCategory={setSelectedCategory}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <main className="flex-1 overflow-y-auto bg-pink-50 flex flex-col">
        {/* Mobile Header Bar */}
        <div className="flex items-center justify-between bg-white border-b border-pink-100 px-6 py-4 md:hidden">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileOpen(true)}
              className="text-pink-500 hover:text-pink-600 focus:outline-none"
            >
              <Menu size={26} />
            </button>
            <h1 className="text-xl font-bold text-gray-800">TrickTask</h1>
          </div>
        </div>
        {activePage === "dashboard" && (
          <HeroDash
  tasks={tasks}
  setTasks={setTasks}
  filter={filter}
  setSelectedCategory={setSelectedCategory}
  setActivePage={setActivePage}
/>
        )}

        {activePage === "Alltask" && (
          <AllTask
            tasks={tasks}
            setTasks={setTasks}
            filter={filter}
          />
        )}

        {activePage === "calendar" && (
          <CalendarPage tasks={tasks} />
        )}

        {activePage === "category" && (
          <Category
            tasks={tasks}
            setTasks={setTasks}
            selectedCategory={selectedCategory}
          />
        )}
      </main>
    </div>
  );
};

export default DashBoard;