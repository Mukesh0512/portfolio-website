import React, { useEffect, useState } from "react";

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
    <section className="min-h-screen p-8 bg-gray-100 text-gray-900">
      <h2 className="text-3xl font-bold mb-6 text-center">My GitHub Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <div key={repo.id} className="p-5 bg-white shadow rounded hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{repo.name}</h3>
            <p className="text-gray-600">{repo.description || "No description provided."}</p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 mt-2 inline-block"
            >
              View Repo →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
