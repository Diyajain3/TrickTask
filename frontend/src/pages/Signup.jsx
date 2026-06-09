import { Lock, Mail, User } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-50 to-fuchsia-100 px-6 overflow-hidden relative">

      {/* Background Glow */}
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-10 left-10 w-72 h-72 bg-pink-300 opacity-20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
        className="absolute bottom-10 right-10 w-72 h-72 bg-fuchsia-300 opacity-20 rounded-full blur-3xl"
      />

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 14,
        }}
        className="w-full max-w-5xl bg-white/80 backdrop-blur-lg rounded-[35px] shadow-[0_20px_80px_rgba(236,72,153,0.25)] overflow-hidden grid grid-cols-1 md:grid-cols-2 border border-pink-100"
      >

        {/* Left Side */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-br from-pink-500 via-rose-500 to-fuchsia-600 text-white p-12 flex flex-col justify-center relative overflow-hidden"
        >

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/10 rounded-full" />

          <h1 className="text-5xl font-black tracking-wide mb-6 relative z-10">
            TrickTask
          </h1>

          <p className="text-pink-100 text-lg leading-relaxed relative z-10">
            Create your account and start managing your tasks
            smarter, faster, and more efficiently than ever.
          </p>

        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="p-10 md:p-14 flex flex-col justify-center"
        >

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl font-extrabold text-gray-800"
          >
            Create Account 🚀
          </motion.h2>

          <p className="text-gray-500 mt-3 mb-10">
            Join TrickTask and boost your productivity.
          </p>

          <form className="flex flex-col gap-6">

            {/* Username */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <label
                htmlFor="name"
                className="flex items-center gap-2 text-gray-700 font-semibold mb-2"
              >
                <User size={18} className="text-pink-500" />
                Full Name
              </label>

              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full bg-white border border-pink-100 rounded-2xl px-5 py-3 outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all"
              />
            </motion.div>

            {/* Email */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <label
                htmlFor="email"
                className="flex items-center gap-2 text-gray-700 font-semibold mb-2"
              >
                <Mail size={18} className="text-pink-500" />
                Email Address
              </label>

              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full bg-white border border-pink-100 rounded-2xl px-5 py-3 outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all"
              />
            </motion.div>

            {/* Password */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <label
                htmlFor="pass"
                className="flex items-center gap-2 text-gray-700 font-semibold mb-2"
              >
                <Lock size={18} className="text-pink-500" />
                Password
              </label>

              <input
                type="password"
                id="pass"
                placeholder="Create password"
                className="w-full bg-white border border-pink-100 rounded-2xl px-5 py-3 outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all"
              />
            </motion.div>

            {/* Signup Button */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white py-3 rounded-2xl font-bold text-lg shadow-lg hover:shadow-pink-300/50 transition-all"
            >
              Create Account
            </motion.button>

          </form>

          {/* Login */}
          <p className="text-center text-gray-500 mt-8">
            Already have an account?{" "}
            <span
              className="text-pink-600 font-bold cursor-pointer hover:underline"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>

        </motion.div>

      </motion.div>
    </div>
  );
};

export default Signup;