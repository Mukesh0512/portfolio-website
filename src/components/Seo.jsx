import { Helmet } from 'react-helmet-async';

const Seo = ({ title, description, image, url }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="author" content="Mukesh Soni" />
    <meta name="keywords" content="Mukesh Soni, Full Stack Developer, React, Node, Portfolio, Tailwind, Web Dev, Freelancer, JavaScript, Vite" />

    {/* Open Graph */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content="website" />

    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
  </Helmet>
);

export default Seo;
