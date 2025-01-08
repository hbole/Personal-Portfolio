import React from 'react'

const Home = () => {
  return (
    <div className="lg:py-28 lg:px-14 xs:py-10 xs:px-0 min-h-screen" id="home">
      <div className="flex lg:flex-row xs:flex-col justify-between items-center gap-12">
        <div className="lg:w-1/2 xs:w-full relative">
          <span className="absolute -top-6 -left-6 beauty-demo text-yellow-400 text-7xl">I'm</span>
          <p className="clash-display-bold text-white text-7xl">Harshit</p>
          <p className="clash-display-bold text-white text-7xl">Bole</p>

          <div>
            <p className="clash-display-light text-white text-xl mt-4 leading-7 tracking-wide">
              A senior full-stack engineer specializing in crafting seamless, user-focused web applications.
              With expertise in modern frontend and backend technologies, I turn ideas into impactful digital experiences.
              I’m passionate about solving problems, simplifying complexity, and building products that people love to use.
            </p>
            <p className="clash-display-light text-white text-xl mt-4 leading-7 tracking-wide">Let’s build something amazing together!</p>
          </div>
        </div>
        <div className="flex justify-center lg:w-4/12">
          <img src="./profile.png" alt="hero" className="lg:w-full sm:w-3/5 profile-img" />
        </div>
      </div>
    </div>
  )
}

export default Home