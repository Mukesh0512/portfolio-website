import React from 'react';

const Contact = () => {
  return (
    <section className="min-h-screen py-16 px-6 bg-white text-gray-800">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-8">Contact Me</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input type="text" className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input type="email" className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Your Message</label>
            <textarea className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-400" rows="5"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
