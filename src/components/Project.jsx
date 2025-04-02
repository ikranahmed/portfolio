import '../assets/styles/Project.css';

export default function Project({ title, image, deployedLink, githubLink }) {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">
        Deployed Application
      </a>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        GitHub Repository
      </a>
    </div>
  );
}