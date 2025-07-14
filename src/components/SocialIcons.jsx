// src/components/SocialIcons.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex gap-4 justify-center mt-6">
      <a
        href="https://github.com/Mukesh0512"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-black text-2xl transition-transform transform hover:scale-110"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/er-mukesh-kumar-soni-194284207/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 text-2xl transition-transform transform hover:scale-110"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://x.com/Mukesh8963"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-600 text-2xl transition-transform transform hover:scale-110"
      >
        <FaTwitter />
      </a>
      <a
        href="mailto:mukeshkumarsoni990@gmail.com"
        className="text-red-500 hover:text-red-700 text-2xl transition-transform transform hover:scale-110"
      >
        <FaEnvelope />
      </a>
    </div>
  );
};

export default SocialIcons;
