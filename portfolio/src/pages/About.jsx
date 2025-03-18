import { Link } from 'react-router-dom';
import '../assets/styles/About.css';

export default function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-image">
          <img
            src="../images/me.png" // Replace with the path to your photo
            alt="Ikran Ahmed"
          />
        </div>
        <div className="about-text">
          <h1>About Me</h1>
          <h2>Ikran Ahmed | Full-Stack Developer</h2>
          <p>
            Hello! My name is Ikran! I’m a Columbus, Ohio-based designer with a background in communication technology (HCI) and a strong passion for user-centered design and front-end development
          </p>
          <p>
            I have experience in wireframing, prototyping, and final design, with a focus on usability and delivering intuitive solutions. Skilled in tools like Figma, Adobe Creative Suite, and Adobe XD, I create user journeys, personas, and high-quality mockups that enhance the user experience. My journey recently into coding started with a curiosity for building websites, which quickly turned into a love for creating engaging, dynamic applications.
          </p>
          <p>
           I specialize in JavaScript, React, TypeScript, Node.js, and I love developing responsive, user-friendly web applications. I’m also skilled in HTML, CSS, Bootstrap, and GitHub.
          </p>
          <p>
          Currently expanding my skill set in front-end development through Ohio State’s Web Development Bootcamp, I’m gaining hands-on experience with HTML, CSS, and JavaScript. Eager to stay current with industry trends, I’m always learning and strive to deliver thoughtful, impactful designs—on time and with attention to detail.
          </p>
          <p>
           I love finding ways to blend technology and creativity, and I’m always excited to take on new challenges!
          </p>
          <Link to="/portfolio" className="view-work-button">
            View My Work
          </Link>
        </div>
      </div>
    </section>
  );
}