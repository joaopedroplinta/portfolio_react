import React from 'react';

interface AboutProps {
  isDarkMode: boolean; // Adicionando a interface para props
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  return (
    <main className="text-center">
      <h1 className={`text-4xl font-semibold ${isDarkMode ? 'text-purple-800' : 'text-purple-800'} mb-6`}>Sobre Mim</h1>
      <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        Tenho 19 anos e sou apaixonado por tecnologia. Atualmente, sou estagiário na Polícia Científica do Paraná. Antes disso, atuei como estagiário nas áreas de Financeiro, Administrativo e Marketing em uma empresa de cursos pré-vestibular. Após essa experiência, trabalhei como jovem aprendiz no setor de produção de uma metalúrgica. Trabalho duro todos os dias para aprimorar minhas habilidades e escrever código de qualidade.
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
            <i className="devicon-html5-plain colored text-5xl"></i>
            <i className="devicon-css3-plain colored text-5xl"></i>
            <i className="devicon-javascript-plain colored text-5xl"></i>
            <i className="devicon-typescript-plain colored text-5xl"></i>
          </div>
        </div>

        <div>
          <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-purple-800' : 'text-purple-800'}`}>Front-end Frameworks</h2>
          <div className="flex gap-2">
            <i className="devicon-react-original colored text-5xl"></i>
            <i className="devicon-jquery-plain-wordmark colored text-5xl"></i>
          </div>
        </div>

        <div>
          <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-purple-800' : 'text-purple-800'}`}>Languages</h2>
          <div className="flex gap-2">
            <i className="devicon-cplusplus-plain colored text-5xl"></i>
            <i className="devicon-java-plain colored text-5xl"></i>
            <i className="devicon-python-plain colored text-5xl"></i>
          </div>
        </div>

        <div>
          <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-purple-800' : 'text-purple-800'}`}>Back-end</h2>
          <div className="flex gap-2">
            <i className="devicon-nodejs-plain colored text-5xl"></i>
            <i className="devicon-python-plain colored text-5xl"></i>
            <i className="devicon-php-plain colored text-5xl"></i>
          </div>
        </div>

        <div>
          <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-purple-800' : 'text-purple-800'}`}>Databases</h2>
          <div className="flex gap-2">
            <i className="devicon-postgresql-plain-wordmark colored text-5xl"></i>
            <i className="devicon-mysql-plain-wordmark colored text-5xl"></i>
            <i className="devicon-microsoftsqlserver-plain-wordmark text-5xl"></i>
          </div>
        </div>

        <div>
          <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-purple-800' : 'text-purple-800'}`}>Tools</h2>
          <div className="flex gap-2">
            <i className="devicon-vscode-plain colored text-5xl"></i>
            <i className="devicon-git-plain colored text-5xl"></i>
            <i className="devicon-github-plain  text-5xl"></i>
            <i className="devicon-docker-plain colored text-5xl"></i>
            <i className="devicon-linux-plain text-5xl"></i>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
