import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

const App: React.FC = () => {
  return (
    <Router>
      <header className="bg-gray-800 text-white p-4">
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">Sobre</Link></li>
            <li><Link to="/contact" className="hover:underline">Contato</Link></li>
            <li><Link to="/gallery" className="hover:underline">Galeria</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
        <p>&copy; 2024 Meu Projeto React com Tailwind e TypeScript</p>
      </footer>
    </Router>
  );
}

export default App;
