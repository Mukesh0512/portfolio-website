import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Toastify for notifications
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// Helmet for SEO
import { HelmetProvider } from 'react-helmet-async';

// AOS for scroll animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS once the app starts
AOS.init({
  once: true, // animations only once
  duration: 800, // animation duration
  easing: 'ease-in-out',
  offset: 50,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
      {/* Toast Notifications */}
      <ToastContainer position="top-center" autoClose={3000} />
    </HelmetProvider>
  </StrictMode>
);
