import { Link } from 'react-router-dom';

const toggleDarkMode = () => {
  document.documentElement.classList.toggle("dark");
};


const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-lg shadow-md sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
     {/* <img src="/Screenshot 2025-07-14 141155.png" alt="Mukesh Logo" className="h-8 w-auto" /> */}

      <h1 className="text-xl font-bold text-blue-700">Er. Mukesh Soni</h1>
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li><Link to="/" className="hover:text-indigo-600">Home</Link></li>
        <li><Link to="/about" className="hover:text-indigo-600">About</Link></li>
        <li><Link to="/projects" className="hover:text-indigo-600">Projects</Link></li>
        <li><Link to="/contact" className="hover:text-indigo-600">Contact</Link></li>
        <li><Link to="/services" className="hover:text-indigo-600">Services</Link>
        

</li>
       {/* <li><Link to="/testimonials" className="hover:text-indigo-600">Testimonials</Link></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
