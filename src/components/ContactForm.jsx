import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

const EMAILJS_PUBLIC_ID = import.meta.env.VITE_EMAILJS_PUBLIC_ID;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;


const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  }

  const sendEmailMessage = async(e) => {
    try {
      setIsLoading(true);
      e.preventDefault();

      if(!name || !email || !message) {
        throw new Error("Cannot send message with Invalid field values");
      }

      const payload = {
        from_name: name,
        from_email: email,
        message: message
      }

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        payload,
        {
          publicKey: EMAILJS_PUBLIC_ID
        }
      );
      
      toast({
        title: "Message Sent Successfully !!",
        variant: "success"
      });
      resetForm();
    } catch (err) {
      toast({
        title: "Error Sending Message",
        description: err.message,
        variant: "error"
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className="flex flex-col lg:gap-3 xs:gap-6" autoComplete="off" onSubmit={sendEmailMessage}>
      <div className="flex md:flex-row xs:flex-col md:gap-4 xs:gap-6">
        <div className="md:w-1/2 xs:w-full flex flex-col gap-1">
          <label htmlFor="name" className="text-white clash-display-medium text-md">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="text-white clash-display-regular text-md w-full card-bg h-10 p-4 rounded-lg outline-none"
            autoComplete="off"
          />
        </div>

        <div className="md:w-1/2 xs:w-full flex flex-col justify-between gap-1">
          <label htmlFor="email" className="text-white clash-display-medium text-md">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="text-white clash-display-regular text-md w-full card-bg h-10 p-4 rounded-lg outline-none"
            autoComplete="off"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-white clash-display-medium text-md">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={handleMessageChange}
          className="text-white clash-display-regular text-md w-full card-bg h-40 p-4 rounded-lg outline-none resize-none"
          autoComplete="off"
        ></textarea>
      </div>
      <div className="flex flex-col justify-center items-center gap-1 mt-4">
        <button
          type="submit"
          disabled={isLoading}
          className="flex justify-center items-center text-white clash-display-bold text-lg card-bg h-12 p-4 rounded-lg outline-none resize-none tracking-wider"
        >
          { isLoading ? "Sending...." : "Send Message"}
        </button>
      </div>
    </form>
  )
}

export default ContactForm