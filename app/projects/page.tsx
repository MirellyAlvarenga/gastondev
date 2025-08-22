import React from "react";
import Image from "next/image";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8 py-16">
      <section className="flex flex-col lg:flex-row bg-black rounded-lg overflow-hidden shadow-lg mb-12 border border-white rounded-xl">
        <div className="relative w-full lg:w-1/2 h-64 lg:h-auto">
          <Image
            src="/images/Trenem.png"
            alt="E-commerce Platform"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none"
          />
        </div>
        <div className="p-8 w-full lg:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-white">Trenem</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              The idea came from the need to apply high school knowledge using
              ENEM practice questions in an efficient and accessible way. It is
              a mobile application inspired by Duolingo where the user could
              train for ENEM questions.
            </p>

            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2">
              <li>
                The landing pages of the application were developed in React,
                following the design pattern;
              </li>
              <li>
                We used more than 17,000 questions for the test database,
                extracted using a Python crawler;
              </li>
              <li>
                The project development followed the Scrum methodology, with the
                role of Scrum Master being applied to ensure agile and organized
                deliveries.
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            <span
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-base rounded-md border border-yellow-500
                             transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-black cursor-pointer"
            >
              React Native
            </span>
            <span
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-base rounded-md border border-yellow-500
                             transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-black cursor-pointer"
            >
              TypeScript
            </span>
            <span
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-base rounded-md border border-yellow-500
                             transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-black cursor-pointer"
            >
              Python
            </span>
            <span
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-base rounded-md border border-yellow-500
                             transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-black cursor-pointer"
            >
              SQL
            </span>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row bg-black rounded-lg overflow-hidden shadow-lg mb-12 border border-white rounded-xl">
        <div className="relative w-full lg:w-1/2 h-64 lg:h-auto">
          <Image
            src="/images/giostri.jpg"
            alt="Data Analytics Platform for Fintech"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none"
          />
        </div>
        <div className="p-8 w-full lg:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-white">
              Giostri Constructions
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              This project was developed as part of my backend development
              studies using Java SpringBoot. It consists of a CRUD Rest API with
              all endpoints, using the H2 test database.
            </p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2">
              <li>Structure logical layers: resource, service, repository;</li>
              <li>Configure test database (H2);</li>
              <li>CRUD - Create, Read, Update, Delete;</li>
              <li>Exception handling</li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            <span
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-base rounded-md border border-yellow-500
                             transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-black cursor-pointer"
            >
              Java Spring Boot
            </span>
            <span
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-base rounded-md border border-yellow-500
                             transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-black cursor-pointer"
            >
              HTML
            </span>
            <span
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-base rounded-md border border-yellow-500
                             transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-black cursor-pointer"
            >
              CSS
            </span>
            <span
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-base rounded-md border border-yellow-500
                             transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-black cursor-pointer"
            >
              JS
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
