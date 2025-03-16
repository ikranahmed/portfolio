import Project from '../assets/styles/Project';

export default function Portfolio() {
  const projects = [
    {
      title: 'Project 1',
      image: '/path/to/project1-image.jpg',
      deployedLink: 'https://project1-deployed-link.com',
      githubLink: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Project 2',
      image: '/path/to/project2-image.jpg',
      deployedLink: 'https://project2-deployed-link.com',
      githubLink: 'https://github.com/vehicle-builderikranahmed/vehicle-builder',
    },
    // Add more projects as needed
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}