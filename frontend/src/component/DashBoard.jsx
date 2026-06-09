import React from "react";
import Sidebar from "./dashboardcomponent/Sidebar";
import NavDash from "./dashboardcomponent/NavDash";
import HeroDash from "./dashboardcomponent/HeroDash";
import { useState } from "react";
import AllTask from "./dashboardcomponent/AllTask";
const DashBoard = () => {
  const [filter, setFilter] = useState("all");

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
    category: "Meetings",
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

const[activePage,setActivePage]=useState("dashboard");
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar tasks={tasks} setFilter={setFilter} setActivePage={setActivePage}/>

      <main className="flex-1 overflow-y-auto bg-pink-50">
       {activePage === "dashboard" && (
          <>
            <HeroDash tasks={tasks} setTasks={setTasks} filter={filter} />
          </>
        )}
        {activePage === "Alltask" && (
          <>
            <AllTask tasks={tasks} setTasks={setTasks} filter={filter} />
          </>
        )}
       
      </main>
    </div>
  );
};

export default DashBoard;