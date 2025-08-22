import React from 'react';
import Image from 'next/image';

const ProjectsPage = () => {
return (
  <div className="min-h-screen bg-black text-white p-8 py-16">

    <section className="flex flex-col lg:flex-row bg-black rounded-lg overflow-hidden shadow-lg mb-12 border border-white rounded-xl">
      <div className="relative w-full lg:w-1/2 h-64 lg:h-auto">
        <Image
          src="/images/PROJETO1.jpg"
          alt="SIGMA"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none"
        />
      </div>
      <div className="p-8 w-full lg:w-1/2 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-white">SIGMA - Instituto Mineiro de Gestão das Águas</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
           I contributed to the development of SIGMA, a comprehensive system designed for the management and monitoring of water resources in the state of Minas Gerais.
           The platform includes web and mobile applications, as well as dynamic reporting tools, providing full support for both qualitative and quantitative water data analysis.
          
           My work involved building and maintaining features using Java (Spring Boot) for the backend and Angular for the frontend, ensuring scalability and performance.
           Additionally, I integrated Power BI dashboards to deliver insightful reports and data visualizations for decision-making.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 mt-6">
          <span className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-base rounded-md border border-yellow-500
                             transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-black cursor-pointer">Java</span>
          <span className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-base rounded-md border border-yellow-500
                             transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-black cursor-pointer">SpringBoot</span>
          <span className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-base rounded-md border border-yellow-500
                             transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-black cursor-pointer">Angular</span>
          <span className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-base rounded-md border border-yellow-500
                             transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-black cursor-pointer">SQL</span>
        </div>
      </div>
    </section>

    <section className="flex flex-col lg:flex-row bg-black rounded-lg overflow-hidden shadow-lg mb-12 border border-white rounded-xl">
      <div className="relative w-full lg:w-1/2 h-64 lg:h-auto">
        <Image
          src="/images/VNG.png"
          alt="VNG"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none"
        />
      </div>
      <div className="p-8 w-full lg:w-1/2 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-white">VNG – Electronic Games Management System</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
          I worked on VNG, a management system for selling electronic games, designed to give sellers better control over their sales and inventory.
          During this project, I applied and deepened my knowledge of Hexagonal Architecture, ensuring a clean and maintainable code structure.
          The backend was developed with Java (Spring Boot), while JavaScript was used for the frontend, following agile methodologies to deliver features iteratively and efficiently.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 mt-6">
          <span className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-base rounded-md border border-yellow-500
                             transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-black cursor-pointer">Java</span>
          <span className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-base rounded-md border border-yellow-500
                             transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-black cursor-pointer">JavaScript</span>
          <span className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-base rounded-md border border-yellow-500
                             transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-black cursor-pointer">SCRUM</span>
          <span className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-base rounded-md border border-yellow-500
                             transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-black cursor-pointer">SQL</span>
        </div>
      </div>
    </section>

  </div>
);
};

export default ProjectsPage;