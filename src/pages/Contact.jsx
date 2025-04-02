import { Link } from 'react-router-dom';
import '../assets/styles/Contact.css';

export default function Contact() {
  return (
    <section className="contact-section">
      <h2>Contact</h2>
      <div className="contact-content">
        <p>Feel free to reach out to me!</p>
        <div className="contact-info">
          <p>Email: <a href="mailto:your-email@example.com">Ikranahmed16@gmail.com</a></p>
          <p>Phone: <a href="tel:+9522881101">952-288-1101</a></p>
        </div>
        <div className="contact-text">
          <p>
            I’d love to hear from you! Whether you have a project in mind, want to collaborate, or just want to chat about design and front-end development, feel free to reach out. 
          </p>
          <p>
            I’m always open to new opportunities and connecting with like-minded creatives. Let’s create something great together!
          </p>
        </div>
        <Link to="/" className="home-button">
          Home
        </Link>
      </div>
    </section>
  );
}