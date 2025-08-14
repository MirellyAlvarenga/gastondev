import React from 'react';
import Image from 'next/image';

const ProjectsPage = () => {
return (
  <div className="min-h-screen bg-black text-white p-8 py-16">
    <h1 className="text-5xl font-bold text-center mb-12">PROJECTS</h1>

    <section className="flex flex-col lg:flex-row bg-black rounded-lg overflow-hidden shadow-lg mb-12 border border-white rounded-xl">
      <div className="relative w-full lg:w-1/2 h-64 lg:h-auto">
        <Image
          src="/images/Projeto_1.webp"
          alt="E-commerce Platform"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none"
        />
      </div>
      <div className="p-8 w-full lg:w-1/2 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-white">E-commerce Platform</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            As a full-stack developer, I transform ideas into complete and intuitive
            digital solutions. My expertise spans the frontend with React/Angular
            and the robust backend with Node.js/Python, creating efficient APIs
            and scalable databases. I'm passionate about clean code,
            performance, and continuous learning, always pursuing best
            development practices.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            I actively collaborate on agile teams, from planning to deployment,
            proactively solving problems. My adaptability to new technologies
            ensures the delivery of high-quality projects. I seek opportunities to
            apply my skills to creating impactful products.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 mt-6">
          <span className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-base rounded-md border border-yellow-500
                             transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-black cursor-pointer">Java</span>
          <span className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-base rounded-md border border-yellow-500
                             transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-black cursor-pointer">React</span>
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
          src="/images/Projeto_2.png"
          alt="Data Analytics Platform for Fintech"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none"
        />
      </div>
      <div className="p-8 w-full lg:w-1/2 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-white">Data Analytics Platform for Fintech</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            As a software engineer with a data focus, I am a builder of
            infrastructures that transform large volumes of information into
            actionable insights. My proficiency lies in creating efficient data
            pipelines using Python/Spark, developing RESTful APIs for data
            consumption, and implementing distributed storage and processing
            solutions (Kafka, Cassandra).
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            I collaborate closely with data scientists and business analysts,
            designing and implementing solutions that support predictive models
            and interactive dashboards. My approach is results-oriented, with a
            focus on continuous delivery and iterative improvement, utilizing agile
            methodologies.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 mt-6">
          <span className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-base rounded-md border border-yellow-500
                             transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-black cursor-pointer">Java</span>
          <span className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-base rounded-md border border-yellow-500
                             transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-black cursor-pointer">React</span>
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
          src="/images/Projeto_3.jpg"
          alt="Intelligent Hospital Management System"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none"
        />
      </div>
      <div className="p-8 w-full lg:w-1/2 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-white">Intelligent Hospital Management System</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            As a software engineer, I am committed to developing robust,
            scalable, and high-quality systems. My expertise spans from data
            modeling and microservices architecture to the design and
            implementation of intuitive user interfaces with modern frameworks. I&apos;m
            apaixonado por performance, clean code, e aplicando SOLID
            principles to ensure maintainability and scalability.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            I actively participate in all phases of the software development
            lifecycle, from requirements gathering and prototyping to automated
            testing and deployment in cloud environments (AWS/Azure).
          </p>
        </div>
        <div className="flex flex-wrap gap-3 mt-6">
          <span className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-base rounded-md border border-yellow-500
                             transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-black cursor-pointer">Java</span>
          <span className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-base rounded-md border border-yellow-500
                             transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-black cursor-pointer">React</span>
          <span className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-base rounded-md border border-yellow-500
                             transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-black cursor-pointer">Angular</span>
          <span className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-base rounded-md border border-yellow-500
                             transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-black cursor-pointer">SQL</span>
        </div>
      </div>
    </section>
  </div>
);
};

export default ProjectsPage;