import React from 'react';

interface HomeProps {
  isDarkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ isDarkMode }) => {
  return (
    <main className="text-center">
      <h1 className={`text-5xl font-bold ${isDarkMode ? 'text-purple-800' : 'text-purple-800'} mb-6`}>Bem-vindo!</h1>
      <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        Eu sou o <strong>João Pedro Plinta</strong>, atualmente aluno de BCC no IFPR - Campus Pinhais. Este é o meu <strong>Portfólio</strong> onde mostro todos os meus conhecimentos e projetos.
      </p>

      <div className="space-x-4 mt-4">
        <a href="https://github.com/joaopedroplinta" className={`text-xl ${isDarkMode ? 'text-purple-700' : 'text-purple-700'}`}>GitHub</a>
      </div>

      <div className="flex justify-center mt-8 mb-4">
        <img src="/joaopedroplinta.jpg" alt="João Pedro Plinta" className="rounded-full w-48 h-48 object-cover shadow-lg"/>
      </div>
    </main>
  );
};

export default Home;
