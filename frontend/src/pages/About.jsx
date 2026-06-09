import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full py-20 px-6 bg-gradient-to-br from-white via-pink-50 to-white flex justify-center">

      <div className="max-w-3xl w-full">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          About <span className="text-pink-600">TrickTask</span>
        </h2>

        {/* Description */}
        <p className="mt-4 text-center text-gray-600">
          TrickTask is a simple and efficient task management tool that helps you
          organize your daily workflow in a structured way.
        </p>

        {/* Cards */}
        <div className="mt-12 space-y-6">

          {/* Card 1 */}
          <div className="flex items-center gap-4 bg-white p-6 rounded-2xl
                          border border-pink-200
                          hover:border-pink-500
                          shadow-sm hover:shadow-xl
                          hover:scale-[1.02]
                          transition-all duration-300">

            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-600 text-white font-bold">
              1
            </div>

            <p className="text-gray-700">
              Create tasks quickly and manage your daily workflow with ease.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-4 bg-white p-6 rounded-2xl
                          border border-pink-200
                          hover:border-pink-500
                          shadow-sm hover:shadow-xl
                          hover:scale-[1.02]
                          transition-all duration-300">

            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-600 text-white font-bold">
              2
            </div>

            <p className="text-gray-700">
              Free and simple interface designed for productivity and speed.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex items-center gap-4 bg-white p-6 rounded-2xl
                          border border-pink-200
                          hover:border-pink-500
                          shadow-sm hover:shadow-xl
                          hover:scale-[1.02]
                          transition-all duration-300">

            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-600 text-white font-bold">
              3
            </div>

            <p className="text-gray-700">
              Filter tasks by deadlines and categories to stay organized.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;