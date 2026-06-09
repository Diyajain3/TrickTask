import React from "react";

const Categories = () => {
  const data = [
    {
      title: "Work",
      desc: "Manage office tasks, meetings, and daily professional workflow efficiently.",
    },
    {
      title: "Personal",
      desc: "Handle daily life tasks, reminders, and personal to-dos easily.",
    },
    {
      title: "Time-Based",
      desc: "Organize tasks based on deadlines and stay ahead of your schedule.",
    },
    {
      title: "Priority",
      desc: "Focus on what matters most with high, medium, and low priority tasks.",
    },
    {
      title: "Lifestyle",
      desc: "Track health, finance, travel, and self-improvement goals.",
    },
  ];

  return (
    <div id="cate" className="w-full py-20 px-6 bg-gradient-to-br from-white via-pink-50 to-white flex justify-center">

      <div className="max-w-6xl w-full">

        {/* Heading */}
        <h2 className="text-4xl md:text-4xl font-bold text-center text-gray-800">
          Task <span className="text-pink-600">Categories</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          Organize your tasks smartly and boost productivity with structured categories.
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5">

          {data.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white/70 backdrop-blur-md border border-pink-200
                         rounded-2xl p-5 cursor-pointer text-center
                         shadow-sm hover:shadow-2xl
                         transition-all duration-300
                         hover:-translate-y-2 hover:scale-105 hover:border-pink-500"
            >

              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 bg-pink-400 blur-xl transition duration-300"></div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-bold text-gray-800 text-base">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Categories;