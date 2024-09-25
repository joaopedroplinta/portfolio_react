// App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'bg-gray-900 text-white min-h-screen flex flex-col' : 'bg-white text-black min-h-screen flex flex-col'}>
      <Router>
        <header className={isDarkMode ? 'bg-gray-800 text-white p-4 shadow-md' : 'bg-blue-900 text-white p-4 shadow-md'}>
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Portfólio</h1>
            <ul className="flex space-x-6">
              <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-300">Sobre</Link></li>
              <li><Link to="/contact" className="hover:text-blue-300">Contato</Link></li>
              <li><Link to="/gallery" className="hover:text-blue-300">Galeria</Link></li>
            </ul>
            <button
              onClick={toggleTheme}
              className={`ml-4 py-2 px-4 rounded transition duration-300 
                          ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-blue-500 hover:bg-blue-400'} 
                          text-white shadow-lg`}
            >
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </nav>
        </header>

        <main className="container mx-auto p-6 flex-grow">
          <Routes>
            <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
            <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
            <Route path="/contact" element={<Contact isDarkMode={isDarkMode} />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>

        <footer className={isDarkMode ? 'bg-gray-800 text-white text-center p-4' : 'bg-blue-900 text-white text-center p-4'}>
          <p>&copy; 2024 João Pedro Plinta</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
