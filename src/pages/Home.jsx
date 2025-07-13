import React from 'react';

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-100 via-white to-purple-100 px-4">
      <h1 className="text-5xl font-extrabold text-blue-800 mb-4">Mukesh Soni</h1>
      <h2 className="text-xl text-gray-700 mb-6">Frontend Developer & Creative Technologist</h2>
      <p className="text-gray-600 max-w-xl mb-10">
        Crafting elegant, performant, and accessible interfaces with React, Tailwind, and modern frontend tools.
      </p>
      <a href="/projects" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all">
        View My Projects
      </a>
    </section>
  );
};

export default Home;
