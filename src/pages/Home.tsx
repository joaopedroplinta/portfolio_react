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

      <div className="mt-6">
        <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Se você deseja saber mais sobre minha trajetória profissional e habilidades, pode baixar meu currículo clicando no botão abaixo.
        </p>
      </div>

      <div className="mt-6">
      <a
        href="/curriculo_joao_plinta.pdf" 
        download="Curriculo_Joao_Pedro_Plinta.pdf"
        className={`inline-block text-lg ${isDarkMode ? 'text-white' : 'text-gray-800'} px-6 py-3 bg-purple-500 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300`}
          >
          Baixar Currículo
        </a>
      </div>
    </main>
  );
};

export default Home;
