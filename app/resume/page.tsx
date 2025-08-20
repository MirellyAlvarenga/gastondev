'use client';

import React, { useState, useEffect } from 'react';

const ResumePage = () => {
const [visiblePdf, setVisiblePdf] = useState<string | null>(null); 

const pdfPortuguesUrl = '/pdfs/curriculo_portugues.pdf';
const pdfInglesUrl = '/pdfs/curriculo_ingles.pdf';

const handleButtonClick = (pdfType: 'portugues' | 'ingles') => {
  setVisiblePdf(pdfType);
};

return (
  <div className="min-h-screen bg-black text-white py-16 p-8 flex flex-col items-center">

    <div className="flex space-x-4 mb-8">
      <button
        onClick={() => handleButtonClick('portugues')}
        className={`px-8 py-3 rounded-md border transition-all duration-300 ease-in-out
                    ${visiblePdf === 'portugues' ? 'bg-white text-black border-white' : 'bg-black text-white border-white hover:bg-gray-800'}`}
      >
        PORTUGUÊS
      </button>
      <button
        onClick={() => handleButtonClick('ingles')}
        className={`px-8 py-3 rounded-md border transition-all duration-300 ease-in-out
                    ${visiblePdf === 'ingles' ? 'bg-white text-black border-white' : 'bg-black text-white border-white hover:bg-gray-800'}`}
      >
        INGLÊS
      </button>
    </div>

    <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden border border-white">
      {visiblePdf === 'portugues' && (
        <iframe
          src={pdfPortuguesUrl}
          title="Currículo em Português"
          className="w-full"
          style={{ height: '80vh' }}
          frameBorder="0"
        ></iframe>
      )}
      {visiblePdf === 'ingles' && (
        <iframe
          src={pdfInglesUrl}
          title="Resume in English"
          className="w-full"
          style={{ height: '80vh' }}
          frameBorder="0"
        ></iframe>
      )}
      {!visiblePdf && (
        <div className="flex items-center justify-center h-[80vh] text-gray-700 text-xl">
          Selecione um idioma para visualizar o currículo.
        </div>
      )}
    </div>
  </div>
);
};

export default ResumePage;