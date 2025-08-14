import Link from "next/link";
import Aside from "./_components/sections/Aside";
import { FaLinkedin, FaGithub, FaInstagram, FaJava, FaPython, FaReact, FaJs} from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className='flex justify-center items-center py-2 mt-2 text-white bg-black'>
        <aside className="fixed top-14 left-0 w-64 h-[calc(100vh-64px)] flex flex-col items-center p-4">
          <img src="/images/Gaston.jpg" alt="" className='rounded-full outline-1 outline-offset-4 drop-shadow-lg drop-shadow-black w-1/2'/>
          <h1 className='text-lg font-bold p-2'>Matheus Gaston</h1>
          <h2 className='text-sm'>Software Engineer</h2>
          <div className='flex flex-col items-center p-2'>
            <Link href="#about" className='border-2 border-solid w-full bg-black text-slate-50 m-1 p-1'>About</Link>
            <Link href="#education" className='border-2 border-solid w-full bg-black text-slate-50 m-1 p-1'>Education</Link>
            <Link href="#experience" className='border-2 border-solid w-full bg-black text-slate-50 m-1 p-1'>Experience</Link>
            <Link href="/contact" className='border-2 border-solid w-full bg-black text-slate-50 m-1 p-1'>Contact</Link>  
          </div>
          <div className="flex gap-4 my-2 p-2">
            <a
              href="https://www.linkedin.com/in/matheus-gaston"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/gastonzinhow"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://instagram.com/gastonzinhow"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-300 text-2xl"
            >
              <FaInstagram />
            </a>
          </div>
        </aside>
        <div id='main'className="flex-1 py-16 w-full bg-gradient-to-b pl-64 to-black space-y-20">
          <section id="about" className="max-w-3xl">
            <h2 className="text-3xl font-bold border-b-2 border-gray-600 pb-2 mb-4">
              About Me
            </h2>
            <p className="text-gray-300 leading-relaxed">
              I’m Matheus Gaston, a passionate Software Engineer from Brazil with a focus
              on building efficient, scalable, and user-friendly applications. My expertise
              includes Java Spring Boot, JavaScript, Python, and React. I thrive in
              fullstack development, from crafting intuitive interfaces to implementing
              robust backend solutions.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 bg-gray-800 p-2 rounded-md">
                <FaJava className="text-2xl text-yellow-400" />
                <span className="text-gray-300 text-sm">Java – 3 yrs</span>
              </div>

              <div className="flex items-center gap-2 bg-gray-800 p-2 rounded-md">
                <FaJs className="text-2xl text-yellow-300" />
                <span className="text-gray-300 text-sm">JavaScript – 4 yrs</span>
              </div>

              <div className="flex items-center gap-2 bg-gray-800 p-2 rounded-md">
                <FaPython className="text-2xl text-blue-400" />
                <span className="text-gray-300 text-sm">Python – 2 yrs</span>
              </div>

              <div className="flex items-center gap-2 bg-gray-800 p-2 rounded-md">
                <FaReact className="text-2xl text-cyan-400" />
                <span className="text-gray-300 text-sm">React – 3 yrs</span>
              </div>
            </div>
          </section>

          <section id="education" className="max-w-3xl">
            <h2 className="text-3xl font-bold border-b-2 border-gray-600 pb-2 mb-4">
              Education
            </h2>
            <div className="space-y-3">
              <div>
                <h3 className="text-xl font-semibold">PUC Minas</h3>
                <p className="text-gray-400">
                  B.Sc. in Software Engineering – Expected Graduation: 2028
                </p>
                <p className="text-gray-300 text-sm">
                  The Software Engineering program at PUC Minas is a comprehensive undergraduate course designed to 
                  equip students with the knowledge and skills necessary to design, develop, test, and maintain
                  high-quality software systems. The curriculum typically covers core areas such as programming 
                  languages, data structures, algorithms, software architecture, database management, software testing, 
                  project management, and quality assurance. Emphasis is placed on modern software development methodologies 
                  (like Agile), best practices, and the application of engineering principles to the entire software lifecycle. 
                  Graduates are prepared for roles in various industries, focusing on creating robust, efficient, and scalable software solutions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">CEFET-MG</h3>
                <p className="text-gray-400">
                  Technical Degree in Computer Science – Completed 2023
                </p>
                <p className="text-gray-300 text-sm">
                  The Technical Course in Informatics (Técnico em Informática) at IFMG is a vocational program that provides students with practical skills 
                  and theoretical knowledge in the field of information technology. This course typically focuses on more hands-on aspects, preparing students 
                  for immediate entry into the job market or for further studies. Key areas of study often include computer maintenance and assembly, network 
                  configuration, basic programming, database fundamentals, web development, and office applications. The program aims to develop competent professionals
                  capable of supporting IT infrastructure, developing simple applications, and providing technical assistance in various organizational settings.
                </p>
              </div>
            </div>
          </section>

          <section id="experience" className="max-w-3xl">
            <h2 className="text-3xl font-bold border-b-2 border-gray-600 pb-2 mb-4">
              Experience
            </h2>
            <div className="space-y-3">
              <div>
                <h3 className="text-xl font-semibold">Fullstack Developer Intern – Uaify</h3>
                <p className="text-gray-400">2024</p>
                <p className="text-gray-300 text-sm">
                  Developed and maintained landing pages, integrated REST APIs, and built
                  internal tools for data management.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Freelance Projects</h3>
                <p className="text-gray-300 text-sm">
                  Worked on multiple projects including e-commerce platforms, parking
                  management systems, and AI-powered meeting recap tools.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div>

      </div>
    </>
  )
}
