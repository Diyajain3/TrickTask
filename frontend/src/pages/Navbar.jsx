import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../component/Logo";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const token = localStorage.getItem("token");

  return (
    <nav className="relative w-full bg-white px-6 py-4 shadow-md flex items-center justify-between z-50">
      {/* Logo */}
      <Logo/>
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
        <a className="hover:text-pink-600 cursor-pointer" href="#hero">
          Home
        </a>
        <a className="hover:text-pink-600 cursor-pointer" href="#about">
          About
        </a>
        <a className="hover:text-pink-600 cursor-pointer " href="#cate">
          Categories
        </a>
        <a className="hover:text-pink-600 cursor-pointer" href="#feed">
          Feedback
        </a>
        {token ? (
          <a className="hover:text-pink-600 cursor-pointer border border-pink-600 py-1 px-3 rounded-lg" href="/dashboard">
            Dashboard
          </a>
        ) : (
          <a className="hover:text-pink-600 cursor-pointer border border-pink-600 py-1 px-3 rounded-lg" href="/login">
            Login
          </a>
        )}
      </div>

      {/* Mobile Icon */}
      <div className="md:hidden z-50">
        <button onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center gap-4 py-4 z-[999] md:hidden border-t">
          <a className="hover:text-pink-600 cursor-pointer" href="#hero">
            Home
          </a>
          <a className="hover:text-pink-600 cursor-pointer" href="#about">
            About
          </a>
          <a className="hover:text-pink-600 cursor-pointer " href="#cate">
            Categories
          </a>
          <a className="hover:text-pink-600 cursor-pointer" href="#feed">
            Feedback
          </a>
          {token ? (
            <a className="cursor-pointer border border-pink-600 py-1 px-3 rounded-lg" href="/dashboard">
              Dashboard
            </a>
          ) : (
            <a className="cursor-pointer border border-pink-600 py-1 px-3 rounded-lg" href="/login">
              Login
            </a>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
