import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      icon: <FaGithub size={24} />,
      href: 'https://github.com/Mukesh0512',
      label: 'GitHub',
    },
    {
      id: 2,
      icon: <FaLinkedin size={24} />,
      href: 'https://www.linkedin.com/in/mukesh-soni',
      label: 'LinkedIn',
    },
    {
      id: 3,
      icon: <FaTwitter size={24} />,
      href: 'https://twitter.com/your_handle',
      label: 'Twitter',
    },
    {
      id: 4,
      icon: <FaEnvelope size={24} />,
      href: 'mailto:youremail@example.com',
      label: 'Email',
    },
  ];

  return (
    <div className="flex justify-center gap-6 mt-6">
      {links.map(({ id, icon, href, label }) => (
        <a
          key={id}
          href={href}
          className="text-gray-600 hover:text-indigo-500 transition-colors"
          target="_blank"
          rel="noreferrer"
          aria-label={label}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
