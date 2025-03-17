// import './assets/styles/Resume.css';

export default function Resume() {
  return (
    <section className="resume-section">
      <h2>Resume</h2>
      <a href="/assets/resume.pdf" download className="resume-download-link">
        Download My Resume
      </a>
      <h3>Skills</h3>
      <ul className="skills-list">
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML/CSS</li>
        <li>Node.js</li>
        <li>Git/GitHub</li>
      </ul>
    </section>
  );
}