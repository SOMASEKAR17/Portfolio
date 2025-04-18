import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Nav from './components/navbar';
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
 

const contact = () => {
  const [msg,setmsg] = useState("");
  const form = useRef();
   

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_l9k5ame',    // replace with your EmailJS service ID
      'template_pna0jkk',   // replace with your EmailJS template ID
      form.current,
      'wDcZ7g6qCOEsBj78C'     // replace with your EmailJS public key
    )
    .then((result) => {
      setmsg('Message sent successfully!');
      form.current.reset(); // optional: clears the form
    }, (error) => {
      setmsg('Failed to send message. Try again later.');
    });
  };

  return (
    <>
    <Nav />
    <div className='w-full lg:min-h-[80vw] sm:min-h-[150vw] min-h-[200vw] xl:min-h-[54vw] p-[12vw] lg:p-[10vw] gap-[2vw] lg:gap-[5vw] grid grid-cols-1 lg:grid-cols-2'>
      <div className=' bg-gray-100 py-10 flex flex-col items-center justify-center rounded-3xl h-full'>
        <h2 className="text-3xl font-semibold mb-4">
          Let's <span className="text-gray-500">Connect.</span>
        </h2>

        <div className="grid md:grid-cols-1 w-2/3 gap-10">
          <form ref={form} onSubmit={sendEmail} className="space-y-4 bg-gray-300 p-6 rounded-lg shadow-xl">
            <input
              type="text"
              name="user_name"
              placeholder="Name *"
              required
              className="w-full p-3 rounded bg-gray-500 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email *"
              required
              className="w-full p-3 rounded bg-gray-500 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Your Subject *"
              required
              className="w-full p-3 rounded bg-gray-500 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message *"
              required
              className="w-full p-3 rounded bg-gray-500 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded font-semibold"
            >
              Send Message
            </button>
          </form>
          <h1 className='text-center font-["Mont"] text-blue-500'>{msg}</h1>
        </div>
      </div>

      <div className=' bg-gray-100 grid grid-rows-3 p-[5vw] rounded-3xl h-full'>
        <div className='font-["Founders"]'>
          <h1 className='text-4xl'>MailID</h1>
          <h2 className='text-[5vw] lg:text-[2vw] xl:text-[1.5vw]'>somasekarnaidu79@gmail.com</h2>
        </div>
        <div className='font-["Founders"]'>
          <h1 className='text-4xl'>Contact</h1>
          <h2 className='text-3xl'>9380648279</h2>
        </div>
        <div>
          <h1 className='text-4xl font-["Founders"]'>Social Info</h1>
          <h2 className='flex text-5xl gap-[3vw]'>
            <a href="https://www.instagram.com/yk.shxpvt_/"><FaInstagram /></a>
            <a href="https://www.linkedin.com/posts/somasekar-naidu-841646320_hackathon-fintech-ai-activity-7318672541546418177-6CaY"><CiLinkedin/></a>
            <a href="https://github.com/SOMASEKAR17"><FiGithub /></a>
          </h2>
        </div>
      </div>
    </div>
    </>
  );
};

export default contact;
