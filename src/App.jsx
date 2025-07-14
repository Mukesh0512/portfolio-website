import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

//import Testimonials from "./pages/Testimonials";
import Services from "./pages/Services";




// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white text-gray-900">
        {/* Navbar at the top */}
        <Navbar />

        {/* Main content area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            {/*<Route path="/testimonials" element={<Testimonials />} /> */}
            <Route path="/services" element={<Services />} />
            <Route path="*" element={<NotFound />} />

          </Routes>
        </main>

        {/* Footer at the bottom */}
        <Footer />
        <ScrollToTop />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;

