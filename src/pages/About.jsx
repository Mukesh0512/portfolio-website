import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen bg-white py-16 px-6 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-700">About Me</h2>
        <p className="text-lg mb-6">
          Hello! I'm Mukesh, a frontend developer with a knack for building stylish, responsive, and user-focused websites.
          With strong expertise in <span className="font-semibold text-purple-600">React.js</span> and <span className="font-semibold text-blue-600">Tailwind CSS</span>,
          I bring clean UI/UX and smooth animations to every project I touch.
        </p>
        <p className="text-lg">
          My mission? To help clients around the world build web experiences that leave a lasting impression. Let's collaborate and create something amazing!
        </p>
      </div>
    </section>
  );
};

export default About;
