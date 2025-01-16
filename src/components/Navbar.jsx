import React, { useMemo, useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const resumeUrl = useMemo(() => "https://legnf8lhda5w2xe4.public.blob.vercel-storage.com/Harshit_Bole%20-%20Resume-fATpHbHs9YknRX4hJbNH7SOdtcW6ac.pdf", []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const drawerRef = useRef(null);

  const handleMenuToggle = () => {
    setIsMenuOpen((isMenuOpen) => {
      return !isMenuOpen;
    })
  };

  const handleOutsideClick = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      console.log('Cool');
      setIsMenuOpen(false); // Close the drawer if clicked outside
    }
  };

  const handleLinkClick = (event) => {
    setIsMenuOpen(false); // Close the drawer when clicking a link
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="flex justify-between items-center text-white lg:h-16 xs:h-20 px-10 w-full fixed top-0 bg-black z-10">
        <a href="#">
          <img src={'./logo.svg'} alt='logo' className='lg:h-14 lg:w-14 xs:h-20 xs:w-20' />
        </a>
        
        <div className="flex justify-between items-center gap-12 text-white lg:flex xs:hidden">
          <a href='#about' className='text-xl text-white clash-display-bold'>About</a>
          {/* TODO: <a href='#projects' className='text-xl text-white clash-display-bold'>Projects</a> */}
          <a href='#experience' className='text-xl text-white clash-display-bold'>Experience</a>
          <a href='#contact' className='text-xl text-white clash-display-bold'>Contact</a>
        </div>
        <a
          href={resumeUrl}
          target="_blank"
          download="Harshit_Bole_Resume.pdf"
          className="flex justify-between items-center gap-2 text-white cursor-pointer lg:flex xs:hidden"
        >
          <i className="fa-solid fa-download"></i>
          <span className='text-xl text-white clash-display-bold'>Resume</span>
        </a>
        <motion.div
          key={isMenuOpen ? "open" : "close"}
          initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          exit={{ scale: 0.5, rotate: 90, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleMenuToggle}
          ref={drawerRef}
          className="flex justify-center items-center gap-2 text-white cursor-pointer lg:hidden xs:flex"
        >
          {
            isMenuOpen ?
            <i className="fa-solid fa-x text-3xl"></i> :
            <i className="fa-solid fa-bars text-3xl"></i>
          }
        </motion.div>
        <AnimatePresence>
          {
            isMenuOpen &&
            <motion.div
              key="drawer"
              initial={{ x: "100%" }} // Starts off-screen (right)
              animate={{ x: 0 }} // Slides into view
              exit={{ x: "100%" }} // Slides out to the right
              transition={{ duration: 0.3, ease: "easeInOut" }} // Controls the animation timing
              className="absolute h-screen md:w-2/5 xs:w-3/5 card-bg right-0 bottom-0 top-0">
              <motion.div
                key={"openIcon"}
                initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                exit={{ scale: 0.5, rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute right-9 top-6" onClick={handleMenuToggle}>
                <i className="fa-solid fa-x text-3xl"></i>
              </motion.div>
              <div className="flex flex-col my-20 mx-8 gap-10">
                <a href='#about' className='text-3xl text-white clash-display-bold' onClick={handleLinkClick}>About</a>
                {/* TODO: <a href='#projects' className='text-xl text-white clash-display-bold'>Projects</a> */}
                <a href='#experience' className='text-3xl text-white clash-display-bold' onClick={handleLinkClick}>Experience</a>
                <a href='#contact' className='text-3xl text-white clash-display-bold' onClick={handleLinkClick}>Contact</a>
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </>
  )
}

export default Navbar