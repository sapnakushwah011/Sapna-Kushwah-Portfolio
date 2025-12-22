import React, { useState } from "react";
import { MdOutlineEmail, MdPhone } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "YOUR_SERVICE_ID";     // Replace with your EmailJS Service ID
    const templateID = "YOUR_TEMPLATE_ID";   // Replace with your EmailJS Template ID
    const publicKey = "YOUR_PUBLIC_KEY";     // Replace with your EmailJS Public Key

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch(() => {
        toast.error("Failed to send message. Try again!");
      });
  };

  return (
    <div id="Contact" className="p-6 md:p-24 bg-linear-to-b from-gray-900 to-gray-800 min-h-screen flex items-center justify-center">
      <div className="relative w-full max-w-5xl bg-linear-to-br from-[#0a0e1a]/70 to-purple-900/20 backdrop-blur-md rounded-3xl p-8 md:p-16 border border-purple-500/20 shadow-xl">
        <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 to-purple-600/10 rounded-3xl pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between gap-10">
          {/* Left: Intro & Social Links */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold bg-linear-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Let's Connect
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 mb-8">Feel free to reach out or send me a message directly!</p>

            <div className="space-y-4">
              <a href="mailto:sapnakushwah072@gmail.com" className="flex items-center gap-3 text-lg group hover:translate-x-2 transition-transform duration-300 text-white">
                <MdOutlineEmail size={28} className="text-purple-400 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-purple-400 transition-colors">sapnakushwah072@gmail.com</span>
              </a>

              <a href="tel:+919876543210" className="flex items-center gap-3 text-lg group hover:translate-x-2 transition-transform duration-300 text-white">
                <MdPhone size={28} className="text-purple-400 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-purple-400 transition-colors">+91 98765 43210</span>
              </a>

              <a href="https://linkedin.com/in/sapna-kushwah-1a29a9214" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg group hover:translate-x-2 transition-transform duration-300 text-white">
                <CiLinkedin size={28} className="text-purple-400 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-purple-400 transition-colors">linkedin.com/in/sapna-kushwah-1a29a9214</span>
              </a>

              <a href="https://github.com/sapnakushwah011" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg group hover:translate-x-2 transition-transform duration-300 text-white">
                <FaGithub size={28} className="text-purple-400 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-purple-400 transition-colors">github.com/sapnakushwah011</span>
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="flex-1 bg-black/30 backdrop-blur-md p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">Send me a message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 border border-purple-500/20 focus:ring-2 focus:ring-purple-400 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 border border-purple-500/20 focus:ring-2 focus:ring-purple-400 outline-none"
              />
              <input
                type="text"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 border border-purple-500/20 focus:ring-2 focus:ring-purple-400 outline-none"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 border border-purple-500/20 focus:ring-2 focus:ring-purple-400 outline-none resize-none"
              />
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
    </div>
  );
};

export default Contact;
