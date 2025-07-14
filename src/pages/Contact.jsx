import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lxvgt4g", // ✅ Your EmailJS service ID
        "template_7rydk7j", // ✅ Your EmailJS template ID
        form.current,
        "iquJRR4HL3n2j8LDp" // ✅ Your EmailJS public key
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          toast.error("Oops! Something went wrong. Try again.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Me</h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300"
              placeholder="Subject"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              required
              rows="6"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
