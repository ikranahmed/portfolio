import '../assets/styles/Header.css';

export default function Header() {
  return (
    <header className="header">
      <h1>Ikran Ahmed's Portfolio</h1>
      <nav className="nav">
        <a href="/">Home</a>
      
        <a href="/portfolio">Portfolio</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}