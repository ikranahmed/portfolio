import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Corrected path
import Footer from './components/Footer'; // Corrected path
import About from './pages/About'; // Corrected path
import Portfolio from './pages/Portfolio'; // Corrected path
import Contact from './pages/Contact'; // Corrected path
import Resume from './pages/Resume'; // Corrected path

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
}