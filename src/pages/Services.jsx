import React from "react";
import { FaCode, FaServer, FaPaintBrush, FaRocket, FaMobileAlt } from "react-icons/fa";

const services = [
  {
    title: "Frontend Development",
    icon: <FaPaintBrush className="text-4xl text-indigo-600" />,
    description:
      "Pixel-perfect, responsive, and accessible UI using React.js, Tailwind CSS, Framer Motion, and more.",
  },
  {
    title: "Backend Development",
    icon: <FaServer className="text-4xl text-green-600" />,
    description:
      "Robust APIs, databases, authentication & authorization using Node.js, Express.js, MongoDB, PostgreSQL.",
  },
  {
    title: "DevOps & Deployment",
    icon: <FaRocket className="text-4xl text-red-600" />,
    description:
      "Deployment to Vercel, Netlify, Railway, CI/CD setup, GitHub Actions, performance optimization.",
  },
  {
    title: "API Integration & Automation",
    icon: <FaCode className="text-4xl text-yellow-600" />,
    description:
      "EmailJS, Stripe, Razorpay, Firebase, webhooks, third-party integrations & workflow automation.",
  },
  {
    title: "Mobile-Ready UI",
    icon: <FaMobileAlt className="text-4xl text-blue-500" />,
    description:
      "Fully responsive layouts with mobile-first design and accessibility baked into every component.",
  },
];

const Services = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-gray-50 py-16 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-12">Services I Offer</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-left"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Let’s Work Together →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
