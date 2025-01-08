import React from 'react'
import ContactForm from './ContactForm'
import ContactMediums from './ContactMediums'

const Contact = () => {
  return (
    <div className="lg:py-28 lg:px-14 xs:py-10 xs:px-0 min-h-screen" id="contact">
      <p className="clash-display-bold text-white text-6xl">Contact</p>

      <div className="flex lg:flex-row xs:flex-col-reverse justify-start py-5 lg:gap-5 xs:gap-8">
        <div className="lg:w-1/2 xs:w-full flex flex-col gap-5">
          <ContactMediums />
          <ContactForm />
        </div>
        <div className="lg:w-1/2 xs:w-full rounded-sm">
          <img 
            src="./images/map.png"
            alt="location"
            className="mix-blend-luminosity" 
          />
        </div>
      </div>
    </div>
  )
}

export default Contact