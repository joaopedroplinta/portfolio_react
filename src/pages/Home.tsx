import React from 'react';

interface HomeProps {
  isDarkMode: boolean; // Adicionando a interface para props
}

const Home: React.FC<HomeProps> = ({ isDarkMode }) => {
  return (
    <main className="text-center">
      <h1 className={`text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-blue-900'} mb-6`}>Bem-vindo!</h1>
      <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        Eu sou o <strong>João Pedro Plinta</strong>, atualmente aluno de BCC no IFPR - Campus Pinhais. Este é o meu <strong>Portfólio</strong> onde mostro todos os meus conhecimentos e projetos.
      </p>

      <div className="space-x-4 mt-4">
        <a href="https://github.com/joaopedroplinta" className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-blue-700'}`}>GitHub</a>
      </div>

      <div className="flex justify-start mb-4">
        <img src="../../public/joaopedroplinta.jpg" alt="João Pedro Plinta" className="w-80 h-90" />
      </div>
    </main>
  );
};

export default Home;
