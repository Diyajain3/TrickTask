import { Mail, Phone } from "lucide-react";
import React from "react";

const Feedback = () => {
  return (
    <div id="feed" className="w-full min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-white via-pink-50 to-white">

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE - INFO */}
        <div className="space-y-6">

          <div>
            <h2 className="text-4xl font-bold text-gray-800">
              Trick<span className="text-pink-600">Task</span>
            </h2>

            <p className="mt-3 text-gray-600 text-lg">
              Organize your life, track your tasks, and boost productivity with a
              simple and powerful task manager.
            </p>
          </div>

          {/* Info Cards */}
          <div className="space-y-4">

            {/* Email Card */}
            <div className="flex items-center gap-4 bg-white border border-pink-200 rounded-xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <Mail className="text-pink-600" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-gray-800">diyajain3003@gmail.com</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="flex items-center gap-4 bg-white border border-pink-200 rounded-xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <Phone className="text-pink-600" />
              <div>
                <p className="text-sm text-gray-500">Contact</p>
                <p className="font-medium text-gray-800">+91-787996XXX</p>
              </div>
            </div>

          </div>

          <p className="text-sm text-gray-500">
            We’d love to hear your feedback 💬
          </p>

        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="bg-white border border-pink-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">

          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Send Feedback
          </h3>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
            />

            <textarea
              rows="5"
              placeholder="Write your feedback..."
              className="w-full p-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-pink-600 text-white font-semibold py-3 rounded-xl hover:bg-pink-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              Submit Feedback
            </button>

          </form>

        </div>

      </div>
    </div>
  );
};

export default Feedback;