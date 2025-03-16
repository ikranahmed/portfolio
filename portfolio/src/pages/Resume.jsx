import resume from '../assets/resume.pdf';

export default function Resume() {
    return (
      <section>
        <h2>Resume</h2>
        <a href={resume} download>Download Resume</a>
        <ul>
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
        </ul>
      </section>
    );
  }