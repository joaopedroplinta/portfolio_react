import React from 'react';

const Gallery: React.FC = () => {
  return (
    <main className="text-center">
      <h1 className="text-4xl font-semibold text-blue-900 mb-6">Galeria</h1>
      <img src="/path-to-your-image.jpg" alt="Imagem" className="mx-auto w-1/2 rounded-lg shadow-lg" />
      <p className="text-lg text-gray-700 mt-4">Confira essa bela imagem na nossa galeria!</p>
    </main>
  );
};

export default Gallery;
