import { CheckSquare } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div id="hero"  className="w-full min-h-[90vh] flex items-center justify-center px-6 bg-gradient-to-br from-pink-50 via-white to-pink-100">

      <div className="max-w-3xl text-center">

        

        {/* Heading */}
        <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-5">
          Track your tasks{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-700">
            smartly
          </span>{" "}
          with TrickTask
        </h1>
        

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-pink-100 text-pink-700 text-sm font-medium shadow-sm">
          <CheckSquare size={16} />
          Manageable Task Tracker
        </div>


        {/* Description */}
        <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
         TrickTask helps you organize, prioritize, and manage your daily tasks with ease. Stay focused, meet deadlines, and boost your productivity with a simple and intuitive task management experience.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

          <button className="px-7 py-3 rounded-xl bg-pink-600 text-white font-semibold shadow-lg hover:shadow-pink-300 hover:scale-105 transition-all duration-300">
            Get Started
          </button>

          <button className="px-7 py-3 rounded-xl border border-pink-300 text-pink-700 font-semibold hover:bg-pink-50 transition-all duration-300">
            Watch Demo
          </button>

        </div>

        

      </div>
    </div>
  );
};

export default Hero;