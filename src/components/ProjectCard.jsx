const ProjectCard = ({ title, image, description, link }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <a href={link} target="_blank" className="inline-block mt-4 text-blue-600 hover:underline">Visit Project →</a>
      </div>
    </div>
  );
};

export default ProjectCard;
