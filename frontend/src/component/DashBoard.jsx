import React, { useState } from "react";
import Sidebar from "./dashboardcomponent/Sidebar";
import HeroDash from "./dashboardcomponent/HeroDash";
import AllTask from "./dashboardcomponent/AllTask";
import CalendarPage from "./dashboardcomponent/CalendarPage";
import Category from "./dashboardcomponent/Category";

const DashBoard = () => {
  const [filter, setFilter] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [activePage, setActivePage] = useState("dashboard");

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Code Review Session",
      category: "Work",
      dueDate: "2026-05-29",
      completed: false,
    },
    {
      id: 2,
      title: "Complete Dashboard UI",
      category: "Work",
      dueDate: "2026-06-09",
      completed: false,
    },
    {
      id: 3,
      title: "Submit Project Report",
      category: "Personal",
      dueDate: "2026-06-09",
      completed: false,
    },
    {
      id: 4,
      title: "Code Review Session",
      category: "Meeting",
      dueDate: "2026-05-29",
      completed: false,
    },
    {
      id: 5,
      title: "Code Review Session",
      category: "Urgent",
      dueDate: "2026-05-29",
      completed: false,
    },
  ]);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        tasks={tasks}
        setFilter={setFilter}
        setActivePage={setActivePage}
        setSelectedCategory={setSelectedCategory}
      />

      <main className="flex-1 overflow-y-auto bg-pink-50">
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