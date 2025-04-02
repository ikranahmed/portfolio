import React from 'react';
import '../assets/styles/Portfolio.css';
// import Readmegenerator from '../images/readme-generator.jpg';
export default function Portfolio() {
  const projects = [
    {
      title: 'README Generator',
      image: '../images/readme-generator.jpg', // Readme Photo
      // image: Readmegenerator, // Readme Photo
      liveDemo: 'https://www.loom.com/share/8153910e669c466aaea73660cc237c71?sid=d7d1262b-6ed5-47c1-a5dd-2dc5f6d5083dLinks', // Replace with your live demo link
      githubRepo: 'https://github.com/ikranahmed/readmegenerator/tree/main', // GitHub repo link
    },
    {
      title: 'Vehicle Builder',
      image: '../images/vehicle-builder.jpg', // Replace with your image path
      liveDemo: 'https://www.loom.com/share/4871f66fa1f24b5bb59de621b0586c54?sid=72d3f23e-35cf-4194-aa1c-4c1b15b9d75dLinks', // Replace with your live demo link
      githubRepo: 'https://github.com/ikranahmed/vehicle-builder', // GitHub repo link
    },
    {
      title: 'Meal Me for Weight Loss',
      image: '../images/meal-me.jpg', // Meal me homepage screenshot
      liveDemo: 'https://www.loom.com/share/35ecae06443e47af95110185c11cb88b?sid=fdc46c52-7967-4a7e-844a-820a2ee7f2ab', // Replace with your live demo link
      githubRepo: 'https://github.com/ikranahmed/MealsMeForWeightloss', //  GitHub repo link
    },
    {
      title: 'Employee Tracker',
      image: '../images/employee-tracker.jpg', // employee tracker phto here
      liveDemo: 'https://www.loom.com/share/59269cfecc044e239ac53a90d46dbba6?sid=190815eb-0473-4508-8138-36305c9cc825 ', // Replace with your live demo link
      githubRepo: 'https://github.com/ikranahmed/employeetracker', // GitHub repo link
    },
  ];

  return (
    <section className="portfolio-section">
      <h2>Work</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-box">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <div className="project-buttons">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="demo-button"
              >
                Live Demo
              </a>
              <a
                href={project.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="github-button"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}