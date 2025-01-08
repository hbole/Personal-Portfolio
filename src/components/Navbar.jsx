import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((isMenuOpen) => {
      return !isMenuOpen;
    })
  }

  return (
    <>
      <div className="flex justify-between items-center text-white lg:h-16 xs:h-20 px-10 w-full fixed top-0 bg-black z-10">
        <a href="#">
          <img src={'./logo.svg'} alt='logo' className='lg:h-14 lg:w-14 xs:h-20 xs:w-20' />
        </a>
        
        <div className="flex justify-between items-center gap-12 text-white lg:flex xs:hidden">
          <a href='#about' className='text-xl text-white clash-display-bold'>About</a>
          <a href='#projects' className='text-xl text-white clash-display-bold'>Projects</a>
          <a href='#experience' className='text-xl text-white clash-display-bold'>Experience</a>
          <a href='#contact' className='text-xl text-white clash-display-bold'>Contact</a>
        </div>
        <div className="flex justify-between items-center gap-2 text-white cursor-pointer lg:flex xs:hidden">
          <i className="fa-solid fa-download"></i>
          <span className='text-xl text-white clash-display-bold'>Resume</span>
        </div>
        <motion.div
          key={isMenuOpen ? "open" : "close"}
          initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          exit={{ scale: 0.5, rotate: 90, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleMenuToggle}
          className="flex justify-center items-center gap-2 text-white cursor-pointer lg:hidden xs:flex"
        >
          {
            isMenuOpen ?
            <i class="fa-solid fa-x text-3xl"></i> :
            <i class="fa-solid fa-bars text-3xl"></i>
          }
        </motion.div>
      </div>
    </>
  )
}

export default Navbar