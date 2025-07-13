import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-lg shadow-md sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-700">Mukesh Soni</h1>
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
