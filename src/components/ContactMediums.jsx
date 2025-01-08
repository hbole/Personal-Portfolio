import React from 'react'

const ContactMediums = () => {
  return (
    <>
      <div className="flex md:flex-row xs:flex-col justify-between items-center md:gap-4 xs:gap-6">
        <a href="mailto:harshitbole1995@gmail.com" className="lg:w-1/2 xs:w-full flex justify-start gap-2 items-center py-3 px-3 rounded-lg card-bg">
          <img src="./logos/email.png" alt="" className="w-6" />
          <p className="text-white clash-display-regular text-md">harshitbole1995@gmail.com</p>
        </a>
        <a href="tel: +917979875294" className="lg:w-1/2 xs:w-full flex justify-start gap-2 items-center py-3 px-3 rounded-lg card-bg">
          <img src="./logos/mobile.png" alt="" className="w-6" />
          <p className="text-white clash-display-regular text-md">+91-7979875294</p>
        </a>
      </div>
    </>
  )
}

export default ContactMediums