import React from 'react';

interface AboutProps {
  isDarkMode: boolean; // Adicionando a interface para props
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  return (
    <main className="text-center">
      <h1 className={`text-4xl font-semibold ${isDarkMode ? 'text-purple-800' : 'text-purple-800'} mb-6`}>Sobre Mim</h1>
      <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        Tenho 19 anos, sou apaixonado pela tecnologia e atualmente sou Estagiário na Polícia Científica. Trabalho duro todos os dias para aprender a melhorar e escrever código de qualidade.
      </p>
      <br />
      <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        Atualmente as linguagens que eu tenho usado no meu dia a dia são:
      </p>
      <br />
      <br />

      <section className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-left">
        <div>
          <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-purple-800' : 'text-purple-800'}`}>Front-end</h2>
          <div className="flex gap-2">
            <i className="devicon-html5-plain colored text-5xl" alt="HTML"></i>
            <i className="devicon-css3-plain colored text-5xl" alt="CSS"></i>
            <i className="devicon-javascript-plain colored text-5xl" alt="JavaScript"></i>
            <i className="devicon-typescript-plain colored text-5xl" alt="TypeScript"></i>
          </div>
        </div>

        <div>
          <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-purple-800' : 'text-purple-800'}`}>Front-end Frameworks</h2>
          <div className="flex gap-2">
            <i className="devicon-react-original colored text-5xl" alt="React"></i>
            <i className="devicon-jquery-plain-wordmark colored text-5xl" alt="jQuery"></i>
          </div>
        </div>

        <div>
          <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-purple-800' : 'text-purple-800'}`}>Languages</h2>
          <div className="flex gap-2">
            <i className="devicon-cplusplus-plain colored text-5xl" alt="C++"></i>
            <i className="devicon-java-plain colored text-5xl" alt="Java"></i>
            <i className="devicon-python-plain colored text-5xl" alt="Python"></i>
          </div>
        </div>

        <div>
          <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-purple-800' : 'text-purple-800'}`}>Back-end</h2>
          <div className="flex gap-2">
            <i className="devicon-nodejs-plain colored text-5xl" alt="Node.js"></i>
            <i className="devicon-python-plain colored text-5xl" alt="Python"></i>
            <i className="devicon-php-plain colored text-5xl" alt="PHP"></i>
          </div>
        </div>

        <div>
          <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-purple-800' : 'text-purple-800'}`}>Databases</h2>
          <div className="flex gap-2">
            <i className="devicon-postgresql-plain-wordmark colored text-5xl" alt="PostgreSQL"></i>
            <i className="devicon-mysql-plain-wordmark colored text-5xl" alt="MySQL"></i>
            <i className="devicon-microsoftsqlserver-plain-wordmark text-5xl" alt="SQL Server"></i>
          </div>
        </div>

        <div>
          <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-purple-800' : 'text-purple-800'}`}>Tools</h2>
          <div className="flex gap-2">
            <i className="devicon-vscode-plain colored text-5xl" alt="VSCode"></i>
            <i className="devicon-git-plain colored text-5xl" alt="Git"></i>
            <i className="devicon-github-plain  text-5xl" alt="GitHub"></i>
            <i className="devicon-docker-plain colored text-5xl" alt="Docker"></i>
            <i className="devicon-linux-plain text-5xl" alt="Linux"></i>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
