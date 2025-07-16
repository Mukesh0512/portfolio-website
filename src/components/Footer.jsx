// src/components/Footer.jsx
import React from "react";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6">
      <SocialIcons />
      <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} Made by Er. Mukesh Soni. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
