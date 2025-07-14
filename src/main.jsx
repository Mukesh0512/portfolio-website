import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { ToastContainer } from 'react-toastify';


// Initialize AOS animations
AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
  <App />
  <ToastContainer position="top-center" autoClose={3000} />
</>

  </StrictMode>
);
