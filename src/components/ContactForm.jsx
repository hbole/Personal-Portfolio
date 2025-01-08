import React from 'react'

const ContactForm = () => {
  return (
    <form className="flex flex-col lg:gap-3 xs:gap-6" autoComplete="off">
      <div className="flex md:flex-row xs:flex-col md:gap-4 xs:gap-6">
        <div className="md:w-1/2 xs:w-full flex flex-col gap-1">
          <label htmlFor="name" className="text-white clash-display-medium text-md">Name</label>
          <input
            type="text"
            id="name"
            className="text-white clash-display-regular text-md w-full card-bg h-10 p-4 rounded-lg outline-none"
            autoComplete="off"
          />
        </div>

        <div className="md:w-1/2 xs:w-full flex flex-col justify-between gap-1">
          <label htmlFor="email" className="text-white clash-display-medium text-md">Email</label>
          <input
            type="email"
            id="email"
            className="text-white clash-display-regular text-md w-full card-bg h-10 p-4 rounded-lg outline-none"
            autoComplete="off"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-white clash-display-medium text-md">Message</label>
        <textarea
          id="message"
          className="text-white clash-display-regular text-md w-full card-bg h-40 p-4 rounded-lg outline-none resize-none"
          autoComplete="off"
        ></textarea>
      </div>
      <div className="flex flex-col justify-center items-center gap-1 mt-4">
        <button
          type="submit"
          className="flex justify-center items-center text-white clash-display-bold text-lg card-bg h-12 p-4 rounded-lg outline-none resize-none tracking-wider"
        >
          Send Message
        </button>
      </div>
    </form>
  )
}

export default ContactForm