// App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'bg-gray-950 text-white min-h-screen flex flex-col' : 'bg-white text-black min-h-screen flex flex-col'}>
      <Router>
        <header className={isDarkMode ? 'bg-gray-900 text-white p-4 shadow-md' : 'bg-purple-800 text-white p-4 shadow-md'}>
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Portfólio</h1>
            <ul className="flex space-x-6">
              <li><Link to="/" className="hover:text-purple-500">Home</Link></li>
              <li><Link to="/about" className="hover:text-purple-500">Sobre</Link></li>
              <li><Link to="/contact" className="hover:text-purple-500">Contato</Link></li>
              <li><Link to="/projects" className="hover:text-purple-500">Projetos</Link></li>
            </ul>
            <button
              onClick={toggleTheme}
              className={`ml-4 py-2 px-4 rounded transition duration-300 
                          ${isDarkMode ? 'bg-gray-700 hover:bg-purple-600' : 'bg-purple-500 hover:bg-purple-300'} 
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
            <Route path="/projects" element={<Projects isDarkMode={isDarkMode} />} />
          </Routes>
        </main>

        <footer className={isDarkMode ? 'bg-gray-900 text-white text-center p-4' : 'bg-purple-800 text-white text-center p-4'}>
          <p>&copy; 2024 João Pedro Plinta</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
