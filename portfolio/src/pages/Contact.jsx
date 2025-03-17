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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <Link to="/" className="home-button">
          Home
        </Link>
      </div>
    </section>
  );
}