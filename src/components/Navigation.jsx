import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <Link to="/">About Me</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/resume">Resume</Link>
    </nav>
  );
}