import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-50 p-8">
    <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
    <p className="text-xl mb-4">Oops! Page not found.</p>
    <Link to="/" className="text-blue-600 hover:underline">
      Go back to Home
    </Link>
  </div>
);

export default NotFound;
