import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-pink-600">TrickTask</h3>

          <p className="text-gray-600 mt-2 max-w-sm">
            Make your daily tasks easier, organized, and more productive with
            TrickTask.
          </p>

          <p className="text-sm text-gray-400 mt-4">© 2026 TrickTask Limited</p>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-gray-700 font-medium">
          <a
            className="hover:text-pink-600 transition cursor-pointer"
            href="#hero"
          >
            Home
          </a>

          <a
            className="hover:text-pink-600 transition cursor-pointer"
            href="#about"
          >
            About
          </a>

          <a
            className="hover:text-pink-600 transition cursor-pointer"
            href="#cate"
          >
            Categories
          </a>

          <a
            className="hover:text-pink-600 transition cursor-pointer"
            href="#feed"
          >
            Feedback
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
