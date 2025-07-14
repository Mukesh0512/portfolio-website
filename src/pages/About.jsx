import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen bg-white py-16 px-6 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-blue-700">About Me</h2>

        <p className="text-lg mb-6 leading-relaxed">
          Hello! I’m <span className="font-semibold text-indigo-700">Mukesh Soni</span>, a passionate and versatile <span className="font-semibold text-green-600">Full Stack Developer</span> with a strong focus on building high-performance web applications and scalable digital solutions. With a love for both frontend finesse and backend robustness, I bring designs to life with clean, efficient, and elegant code.
        </p>

        <p className="text-lg mb-6 leading-relaxed">
          My journey in tech started with curiosity, fueled by coffee, and matured with real-world projects. Whether it’s a sleek landing page, a feature-rich web platform, or an enterprise-grade dashboard — I architect solutions that are beautiful, fast, and functional.
        </p>

        <h3 className="text-2xl font-bold mt-10 mb-4 text-indigo-600">🧠 What I Do</h3>
        <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
          <li><strong>⚛️ Frontend Development:</strong> React.js, Next.js, Redux Toolkit, Tailwind CSS, Framer Motion, Axios</li>
          <li><strong>🛠️ Backend Development:</strong> Node.js, Express.js, MongoDB, PostgreSQL, Supabase, Firebase, RESTful APIs</li>
          <li><strong>🧪 Integrations:</strong> EmailJS, Nodemailer, Stripe, Razorpay, JWT, 3rd-party APIs</li>
          <li><strong>🚀 DevOps & Deployment:</strong> Vercel, Netlify, GitHub Pages, Railway, Render, GitHub Actions</li>
          <li><strong>📊 CMS & SEO:</strong> SEO optimization, Analytics, Open Graph, Twitter Cards</li>
          <li><strong>🌐 Version Control:</strong> Git + GitHub, CI/CD workflows</li>
        </ul>

        <h3 className="text-2xl font-bold mt-10 mb-4 text-indigo-600">🎓 Education</h3>
        <p className="text-lg mb-2">
          <strong>Bachelor’s of Technology in Computer Science & Engineering</strong><br />
          Dr. A.P.J. Abdul Kalam Technical University
        </p>

        <h3 className="text-2xl font-bold mt-10 mb-4 text-indigo-600">🎖️ Certifications</h3>
        <ul className="list-disc list-inside text-lg space-y-2 mt-2">
          <li>LEAD1x: Exercising Leadership: Foundational Principles - Harvard University </li>
          <li>Red Hat IT Aptitude Test India - 2023 - Red Hat Academy </li>
          <li>Workshop on Internet of Things (IoT) - SoftPro India </li>
          <li>Database Foundations - Oracle Academy </li>
          <li>Career Essentials in Software Development - Microsoft & Linkedin </li>
          <li>Full Stack Developer Certificate - Pro5.ai </li>
          <li>Full Stack Developer Intern – Eazybytes IT Solutions Pvt. Ltd. </li>
          <li>Store Listing Certificate – Google Play Academy</li>
          <li>Python Programming – Reliance Foundation</li>
          <li>Soft Skills and Quantitative Aptitude – Learnovate Enterprise </li>
          <li>Full Stack Developer Intern Certificate – Lucknow University </li>
          <li>Python Programming – National Skill Development Corporation </li>
        </ul>

        <h3 className="text-2xl font-bold mt-10 mb-4 text-indigo-600">🛠️ Full Tech Stack</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-lg">
          <div>
            <h4 className="font-semibold text-gray-700 mb-1">Languages:</h4>
            <ul className="list-disc list-inside">
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>HTML5, CSS3, Sass</li>
              <li>SQL, NoSQL (MongoDB)</li>
              <li>JSON, Markdown</li>
              <li>Bash (basic)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-1">Frontend Libraries:</h4>
            <ul className="list-disc list-inside">
              <li>React.js, Redux Toolkit</li>
              <li>Next.js</li>
              <li>Tailwind CSS, Bootstrap 5</li>
              <li>Framer Motion</li>
              <li>React Router</li>
              <li>React Query</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-1">Backend & Databases:</h4>
            <ul className="list-disc list-inside">
              <li>Node.js, Express.js</li>
              <li>MongoDB, Mongoose</li>
              <li>PostgreSQL</li>
              <li>Firebase (Auth, DB)</li>
              <li>RESTful APIs, JWT</li>
              <li>Nodemailer, EmailJS</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-1">Dev Tools:</h4>
            <ul className="list-disc list-inside">
              <li>Git + GitHub</li>
              <li>NPM / Yarn / PNPM</li>
              <li>Postman, Vite, Webpack</li>
              <li>ESLint + Prettier</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-1">Deployment & CI/CD:</h4>
            <ul className="list-disc list-inside">
              <li>Vercel, Netlify, GitHub Pages</li>
              <li>Render</li>
              <li>GitHub Actions</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-1">UI/UX & Analytics:</h4>
            <ul className="list-disc list-inside">
              <li>Figma, Canva, Adobe</li>
              <li>Responsive Design</li>
              <li>Component-Driven UI</li>
              <li>Google Analytics, GSC</li>
              <li>Lighthouse Score</li>
              <li>SEO / Meta Tags</li>
            </ul>
          </div>
        </div>

        <h3 className="text-2xl font-bold mt-10 mb-4 text-indigo-600">🌍 Why Work With Me?</h3>
        <p className="text-lg leading-relaxed">
          I’m a problem solver who thrives under deadlines, adapts quickly to changing requirements, and believes in writing maintainable and reusable code. Clients love working with me because I don’t just build websites — I build digital systems that scale.
        </p>
        <p className="text-lg mt-4 leading-relaxed">
          Whether you're a startup founder, design agency, or a solo entrepreneur — let's collaborate to build something awesome.
        </p>
      </div>
    </section>
  );
};

export default About;
