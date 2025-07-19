import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";


const liveLinks = {
  "portfolio-website": "https://portfolio-website-inky-eight-27.vercel.app/",
  "Molecule-Housing-Market": "https://molecule-housing-market.web.app/",
  // Add more repo names and links here
};




const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Mukesh0512/repos")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(repo => !repo.fork); // optional: skip forks
        setRepos(filtered);
      });
  }, []);

  return (
    <section
      className="min-h-screen p-10 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white relative"
      style={{
        backgroundImage: 'url(https://www.transparenttextures.com/patterns/3px-tile.png)',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-black">My GitHub Projects</h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <motion.div
              key={repo.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 transform transition-transform hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-2 text-indigo-700">{repo.name}</h3>
              <p className="text-gray-600 mb-4 min-h-[60px]">
                {repo.description || "No description provided."}
              </p>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
              >
                View on GitHub
              </a>
              {liveLinks[repo.name] && (
               <a
                href={liveLinks[repo.name]}
                target="_blank"
                 rel="noreferrer"
                className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition ml-2"
                >
                Go Live
               </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
