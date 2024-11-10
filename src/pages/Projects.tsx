import React from 'react';

interface ProjectsProps {
  isDarkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const projects = [
    {
      title: "DigitalDash",
      description: "Plataforma de e-commerce que fornece uma experiência de compra diversificada e conveniente.",
      link: "https://github.com/joaopedroplinta/DigitalDash",
    },
    {
      title: "Back-End em Java",
      description: "Servidor para um planner.",
      link: "https://github.com/joaopedroplinta/nlw-java",
    },
    {
      title: "Aplicativo de Notas",
      description: "Aplicação de um bloco de notas, onde você pode gravar uma nota de áudio ou utilizar apenas texto.",
      link: "https://github.com/joaopedroplinta/nlw-expert-notes",
    },
    {
      title: "Alocação de Memória em C++",
      description: "Este programa em C++ aloca registros na memória e mede o tempo de execução, uso de recursos e endereços de memória. O programa foi desenvolvido para investigar o comportamento da alocação de registros e seus impactos em termos de tempo de execução, uso de memória e desempenho da CPU.",
      link: "https://github.com/joaopedroplinta/nlw-expert-notes",
    },
    {
      title: "Algoritmo de Eleição Distribuída",
      description: "Este projeto implementa um algoritmo de eleição distribuída em C++. O objetivo é simular um sistema distribuído onde processos elegem um coordenador e monitoram sua atividade.",
      link: "https://github.com/joaopedroplinta/algoritimo_eleicao"
    },
    {
      title: "To-Do List",
      description: "Aplicação de uma lista de tarefas.",
      link: "https://github.com/joaopedroplinta/my-todo-app"
    },
    {
      title: "Pokémon API",
      description: "Este projeto é uma aplicação web que utiliza a Pokémon API para exibir todos os Pokémon da 1ª até a 3ª geração (1-386). A aplicação é construída com React, TypeScript e TailwindCSS.",
      link: "https://github.com/joaopedroplinta/pokemon-api"
    },
    {
      title: "Jogo da Velha",
      description: "Recriação do jogo da velha no terminal. Você tem a opção de jogar no tabuleiro 3x3, 5x5, 7x7 e 9x9. O jogo tambem conta com a opção de ser jogado em dupla ou contra a maquina",
      link: "https://github.com/joaopedroplinta/tic-tac-toe-python"
    },
  ];

  return (
    <main className="text-center">
      <h1 className={`text-4xl font-semibold ${isDarkMode ? 'text-purple-800' : 'text-purple-800'} mb-6`}>Projetos</h1>
      <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
        Aqui estão alguns dos meus principais projetos com links para mais detalhes.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
              isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700'
            }`}
          >
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-lg font-semibold underline ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}
            >
              Ver no GitHub
            </a>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
