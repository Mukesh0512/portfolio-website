import React from 'react';
import ProjectCard from '../components/ProjectCard';

const dummyProjects = [
  {
    title: 'Creative Landing Page',
    image: '/images/project1.jpg',
    description: 'A sleek marketing landing page using Tailwind and GSAP animations.',
    link: 'https://example.com/project1',
  },
  {
    title: 'E-Commerce Dashboard',
    image: '/images/project2.jpg',
    description: 'React + Tailwind dashboard with charts, filters, and responsive layout.',
    link: 'https://example.com/project2',
  },
  {
    title: 'Portfolio Website',
    image: '/images/project3.jpg',
    description: 'A fully responsive portfolio website (like this one!).',
    link: 'https://example.com/project3',
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
