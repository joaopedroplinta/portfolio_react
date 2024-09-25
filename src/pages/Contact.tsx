import React from 'react';

interface ContactProps {
  isDarkMode: boolean; // Adicionando a interface para props
}

const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  return (
    <main className="text-center">
      <h1 className={`text-4xl font-semibold ${isDarkMode ? 'text-white' : 'text-blue-900'} mb-6`}>Contato</h1>
      <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
        Entre em contato através das redes sociais ou clique aqui para mandar um e-mail.
      </p>
      
      <ul id="redes-container" className="flex justify-center space-x-4 mb-4">
        <li>
          <a href="https://www.linkedin.com/in/joao-pedro-plinta/" target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-linkedin" style={{ fontSize: '36px' }}></ion-icon>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/pinguim_joao/" target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-instagram" style={{ fontSize: '36px' }}></ion-icon>
          </a>
        </li>
      </ul>

      <div id="email-container" className="flex justify-center items-center">
        <ion-icon name="mail-outline" style={{ fontSize: '36px' }}></ion-icon>
        <a href="mailto:joaopedrohenriqueplinta@gmail.com" className={`ml-2 ${isDarkMode ? 'text-gray-300' : 'text-blue-700'}`}>
          Clique aqui para me mandar um e-mail
        </a>
      </div>
    </main>
  );
};

export default Contact;
