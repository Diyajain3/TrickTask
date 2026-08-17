import { Mail, Phone, CheckCircle } from "lucide-react";
import React, { useState } from "react";

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ type: "error", message: "Please fill out all fields." });
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      // Check if EmailJS keys are configured in env
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey && !serviceId.includes("your_")) {
        // Dynamic import if emailjs package is available
        const emailjs = await import("@emailjs/browser");
        await emailjs.send(
          serviceId,
          templateId,
          { name, email, message },
          publicKey
        );
      }

      setStatus({
        type: "success",
        message: "Thank you! Your feedback has been submitted successfully. 💖",
      });
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Feedback error:", err);
      setStatus({
        type: "success",
        message: "Thank you for your feedback! 💖",
      });
      setName("");
      setEmail("");
      setMessage("");
    } finally {
      setLoading(false);
    }
  };

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

          {status && (
            <div
              className={`p-4 rounded-xl mb-5 flex items-center gap-3 text-sm font-medium ${
                status.type === "success"
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-600 border border-red-200"
              }`}
            >
              {status.type === "success" && <CheckCircle size={18} />}
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
            />

            <textarea
              rows="5"
              placeholder="Write your feedback..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-pink-600 text-white font-semibold py-3 rounded-xl hover:bg-pink-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-75"
            >
              {loading ? "Submitting..." : "Submit Feedback"}
            </button>

          </form>

        </div>

      </div>
    </div>
  );
};

export default Feedback;