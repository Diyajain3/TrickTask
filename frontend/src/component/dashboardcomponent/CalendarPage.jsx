import React, { useState } from "react";

const CalendarPage = ({ tasks }) => {
  const today = new Date();

  const [selectedDate, setSelectedDate] = useState(
    today.toISOString().split("T")[0]
  );

  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const daysInMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate();

  const firstDay = new Date(
    currentYear,
    currentMonth,
    1
  ).getDay();

  const days = [];

  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const getDateString = (day) => {
    return `${currentYear}-${String(
      currentMonth + 1
    ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  };

  const selectedTasks = tasks.filter(
    (task) => task.dueDate === selectedDate
  );

  return (
    <div className="min-h-screen bg-pink-50 p-4 md:p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-black">
          Calendar
        </h1>

        <p className="text-gray-500">
          Track tasks by due date
        </p>
      </div>

      <div className="flex flex-col gap-6 xl:grid xl:grid-cols-3">
        {/* Calendar */}
        <div className="lg:col-span-2 rounded-3xl bg-white p-5 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-pink-500">
            {today.toLocaleString("default", {
              month: "long",
            })}{" "}
            {currentYear}
          </h2>

          {/* Week Names */}
          <div className="grid grid-cols-7 gap-1 sm:gap-2">
            {[
              "Sun",
              "Mon",
              "Tue",
              "Wed",
              "Thu",
              "Fri",
              "Sat",
            ].map((day) => (
              <div
                key={day}
                className="text-center font-medium text-pink-500"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Dates */}
          <div className="grid grid-cols-7 gap-2">
            {days.map((day, index) => {
              if (!day) {
                return (
                  <div
                    key={index}
                    className="h-24"
                  ></div>
                );
              }

              const dateString = getDateString(day);

              const dayTasks = tasks.filter(
                (task) => task.dueDate === dateString
              );

              const isToday =
                day === today.getDate();

              return (
                <div
                  key={index}
                  onClick={() =>
                    setSelectedDate(dateString)
                  }
                  className={`
h-14
sm:h-20
md:h-24
cursor-pointer
rounded-lg
sm:rounded-xl
md:rounded-2xl
border
p-1
sm:p-2
transition

                    ${
                      selectedDate === dateString
                        ? "border-pink-500 bg-pink-100"
                        : "border-pink-100 bg-white hover:bg-pink-50"
                    }
                  `}
                >
                  <div
                    className={`
inline-flex
h-5 w-5
sm:h-6 sm:w-6
md:h-7 md:w-7
items-center
justify-center
rounded-full
text-xs
sm:text-sm

                    ${
                      isToday
                        ? "bg-pink-500 text-white"
                        : "text-black"
                    }`}
                  >
                    {day}
                  </div>

                  {dayTasks.length > 0 && (
                    <div className="mt-2">
                      <span className="rounded-full bg-pink-500 px-1.5 py-0.5 text-[10px] sm:text-xs text-white">
                        {dayTasks.length} Task
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Tasks Panel */}
        <div className="rounded-3xl bg-white p-5 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-pink-500">
            Tasks
          </h2>

          <p className="mb-5 text-sm text-gray-500">
            {selectedDate}
          </p>

          {selectedTasks.length === 0 ? (
            <div className="
rounded-xl
sm:rounded-2xl
border
border-pink-100
p-3
sm:p-4
">
              No tasks for this date
            </div>
          ) : (
            <div className="space-y-3">
              {selectedTasks.map((task) => (
                <div
                  key={task.id}
                  className="rounded-2xl border border-pink-100 p-4"
                >
                  <h3 className="text-base text-black">
                    {task.title}
                  </h3>

                  <div className="mt-2 flex items-center justify-between">
                    <span className="rounded-full bg-pink-100 px-3 py-1 text-xs text-pink-500">
                      {task.category}
                    </span>

                    <span
                      className={`text-xs ${
                        task.completed
                          ? "text-green-500"
                          : "text-gray-500"
                      }`}
                    >
                      {task.completed
                        ? "Completed"
                        : "Pending"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;