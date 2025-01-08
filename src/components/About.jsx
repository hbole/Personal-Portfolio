import React from 'react'
import TechStack from './TechStack'

const About = () => {
  return (
    <div className="lg:py-28 lg:px-14 xs:py-10 xs:px-0 min-h-screen" id="about">
      <p className="clash-display-bold text-white text-6xl">About Me</p>

      <div className="flex lg:flex-row xs:flex-col justify-start gap-10">
        <div className="lg:w-1/2 xs:w-full">
          <p className="clash-display-light text-white text-xl text-justify mt-4 leading-7 tracking-wide">
            Hello, I’m <span className="mx-2 clash-display-bold text-yellow-400 text-xl">Harshit Bole </span>, a senior full-stack engineer with over <span className="clash-display-bold text-sky-600">5+ years</span> of experience creating polished and user-centric web applications.
            My expertise lies in frontend technologies like <span className="clash-display-bold text-sky-600">React</span>, <span className="clash-display-bold text-sky-600">Next.js</span>, 
            <span className="clash-display-bold text-sky-600"> Typescript</span>, and <span className="clash-display-bold text-sky-600">Tailwind CSS</span>, 
            coupled with a solid foundation in backend frameworks such as <span className="clash-display-bold text-sky-600">Node.js</span> and <span className="clash-display-bold text-sky-600">Spring Boot</span>. 
            I’m driven by a passion for solving complex problems and delivering exceptional user experiences, focusing on clean code and scalable solutions.
          </p>
          <p className="clash-display-light text-white text-xl text-justify mt-4 leading-7 tracking-wide">
          From brainstorming ideas to deploying production-ready applications, I thrive on turning concepts into real-world digital products that leave a lasting impact.
          </p>
          <p className="clash-display-light text-white text-xl text-justify mt-4 leading-7 tracking-wide">
            Outside of coding, I’m all about exploring new destinations 🏔️, hitting the court for basketball 🏀, or spiking it up in volleyball 🏐.
          </p>
        </div>
        <div className="lg:w-1/2 xs:w-full flex justify-center items-stretch">
          <TechStack />
        </div>
      </div>
    </div>
  )
}

export default About