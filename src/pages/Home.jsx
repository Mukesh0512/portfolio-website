import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section
      className="min-h-screen bg-cover bg-center flex items-center justify-center text-white px-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1740&q=80')",
      }}
    >
      <div className="bg-black bg-opacity-60 p-10 rounded-lg shadow-lg text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Full Stack Developer & AI Enthusiast
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Hello! I'm Mukesh Soni. I design and build performant, modern web applications powered by React, Node.js, and scalable backend systems — with a special love for AI-integrated solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/projects"
            className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded text-white font-semibold"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="bg-transparent border border-white hover:bg-white hover:text-black transition px-6 py-2 rounded font-semibold"
          >
            Let's Connect
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
