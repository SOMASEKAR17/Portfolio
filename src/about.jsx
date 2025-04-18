import React, { useEffect } from 'react'
import Nav from './components/navbar'
 
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { FaC } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { TbBrandOauth } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import { SiEjs } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiYoutubegaming } from "react-icons/si";
import { CgGym } from "react-icons/cg";
import { useLocation } from 'react-router-dom';

const about = () => {
   
    const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <>
    <Nav />
    <div id='start' className="main pb-[10vw] pt-[30vw] sm:pt-[20vw] lg:pt-[12vw] xl:pt-[10vw] px-[3vw] w-full overflow-hidden">
          <div className="myself flex flex-col xl:flex-row items-center justify-center xl:gap-[2vw] sm:gap-[8vw] gap-[10vw] w-full xl:h-[25vw] xl:px-[3vw] ">
            <div className="photo xl:w-1/3 w-[50vw] h-[50vw] md:w-[30vw] md:h-[30vw] lg:w-[30vw] overflow-hidden lg:h-[30vw] bg-gray-200 xl:h-full rounded-4xl">
              <img src="Myself.jpg" className='w-full h-full object-cover object-center' alt="" />
            </div>
            <div className="details xl:w-4/5 bg-gray-200 w-3/4 text-zinc-600 overflow-hidden flex gap-10 py-15 items-center flex-col px-10 justify-center lg:h-100  xl:h-full rounded-4xl capitalize font-['Founders']">
            <h1 className='text-[4.5vw] lg:text-[2.5vw] w-full h-1/4'>Hello👋 ,</h1>
            <p className='text-[3.5vw] lg:text-[2vw]'>I’m a developer who loves building things that work well and look great. From solid backend systems to smooth, intuitive frontends, I enjoy the full stack and the challenges that come with it. I’m always learning, experimenting, and pushing myself to write better code and create more user-friendly experiences. Tech is my playground—and I'm here to make cool things happen.</p>
            </div>
          </div>
        </div>
    <div id='mile' className='w-full lg:px-[6vw] xl:px-[10vw] px-[8vw] items-center justify-center pb-20 flex lg:flex-row flex-col gap-20'>
        <div className='md:w-4/5 xl:w-1/2 rounded-2xl flex px-[2vw] flex-col pb-[5vw] w-full lg:h-[30vw] md:h-[40vw] h-[60vw] bg-gray-200'>
        <h1 className='text-[4.5vw] lg:text-[2.5vw] w-full text-zinc-600 font-["Founders"] h-1/4 text-center mt-5'>Education</h1>
        <h1 className='text-[4.5vw] lg:text-[2.5vw] w-full text-zinc-600 font-["Founders"] h-1/4 '>High School Diploma</h1>
        <h1 className='text-[3vw] lg:text-[2vw] w-full text-zinc-600 font-["Mont"] h-1/4 '>Alvas</h1>
        <h1 className='text-[3vw] lg:text-[2vw] w-full text-zinc-600 font-["Mont"] h-1/4 '>07/2022 – 05/2024</h1>
        <h1 className='text-[4.5vw] lg:text-[2.5vw] w-full text-zinc-600 font-["Founders"] h-1/4 '>Bachelor of Technology - BTech</h1>
        <h1 className='text-[3vw] lg:text-[2vw] w-full text-zinc-600 font-["Mont"] h-1/4 '>Vellore Institute of Technology</h1>
        <h1  className='text-[3vw] lg:text-[2vw] w-full text-zinc-600 font-["Mont"] h-1/4 '>07/2024 – 07/2028</h1>
        </div>
        <div  className='md:w-4/5 xl:w-1/2 rounded-2xl flex px-[2vw] pb-[5vw] flex-col  w-full lg:h-[30vw] md:h-[40vw] h-[60vw] bg-gray-200'>
            <h1 className='text-[4.5vw] lg:text-[2.5vw] w-full text-zinc-600 font-["Founders"] h-1/4 text-center mt-5'>Achivements</h1>
            <h1 className='text-[4.5vw] lg:text-[2.5vw] w-full text-zinc-600 font-["Founders"] h-1/4 '>RUNNERUP IN PYTHON API HACKATHON</h1>
            <h1 className='text-[3vw] lg:text-[2vw] w-full text-zinc-600 font-["Mont"] h-1/4 '>{"(ORGANIZED BY MIDAS)"}</h1>
            <h1 className='text-[3vw] lg:text-[2vw] w-full text-zinc-600 font-["Mont"] h-1/4 '>10/11/2024</h1>
            <h1 className='text-[4.5vw] lg:text-[2.5vw] w-full text-zinc-600 font-["Founders"] h-1/4 '>1'ST RUNNERUP CODEDOC 2.0 HACKATHON</h1>
            <h1 className='text-[3vw] lg:text-[2vw] w-full text-zinc-600 font-["Mont"] h-1/4 '>{"(ORGANIZED BY IEEE PES)"}</h1>
            <h1 className='text-[3vw] lg:text-[2vw] w-full text-zinc-600 font-["Mont"] h-1/4 '>05/04/2025</h1>
        </div>
    </div>
    <div id='tech' className="w-7/10 mx-auto bg-gray-200 rounded-3xl mb-20 p-[6vw] flex flex-col ">
        <h1 className='text-[4vw] text-zinc-600 lg:text-[2vw] w-full h-1/4 font-["Founders"]'>Tools And Technologies</h1>
        <div className='w-full grid xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:mt-6 sm:mt-4 mt-2 lg:gap-20 sm:gap-10 gap-5 flex-wrap'>
            <div className="hover:scale-110 transition-all ease-in-out duration-200 text-[10vw] lg:text-[5vw] xl:text-[4vw] flex flex-col items-center leading-0"><SiExpress /><span className='text-lg w-full flex justify-center font-["Mont"]'>Express</span></div>
            <div className="hover:scale-110 transition-all ease-in-out duration-200 text-[10vw] lg:text-[5vw] xl:text-[4vw] flex flex-col items-center leading-0"><FaReact /><span className='text-lg w-full flex justify-center font-["Mont"]'>React</span></div>
            <div className="hover:scale-110 transition-all ease-in-out duration-200 text-[10vw] lg:text-[5vw] xl:text-[4vw] flex flex-col items-center leading-0"><RiTailwindCssFill /><span className='text-lg w-full flex justify-center font-["Mont"]'>Tailwind</span></div>
            <div className="hover:scale-110 transition-all ease-in-out duration-200 text-[10vw] lg:text-[5vw] xl:text-[4vw] flex flex-col items-center leading-0"><FaNode /><span className='text-lg w-full flex justify-center font-["Mont"]'>NodeJs</span></div>
            <div className="hover:scale-110 transition-all ease-in-out duration-200 text-[10vw] lg:text-[5vw] xl:text-[4vw] flex flex-col items-center leading-0"><DiMongodb /><span className='text-lg w-full flex justify-center font-["Mont"]'>Mongo</span></div>
            <div className="hover:scale-110 transition-all ease-in-out duration-200 text-[10vw] lg:text-[5vw] xl:text-[4vw] flex flex-col items-center leading-0"><FaHtml5 /><span className='text-lg w-full flex justify-center font-["Mont"]'>HTML</span></div>
            <div className="hover:scale-110 transition-all ease-in-out duration-200 text-[10vw] lg:text-[5vw] xl:text-[4vw] flex flex-col items-center leading-0"><FaCss3 /><span className='text-lg w-full flex justify-center font-["Mont"]'>CSS</span></div>
            <div className="hover:scale-110 transition-all ease-in-out duration-200 text-[10vw] lg:text-[5vw] xl:text-[4vw] flex flex-col items-center leading-0"><FaJs /><span className='text-lg w-full flex justify-center font-["Mont"]'>Js</span></div>
            <div className="hover:scale-110 transition-all ease-in-out duration-200 text-[10vw] lg:text-[5vw] xl:text-[4vw] flex flex-col items-center leading-0"><SiVite /><span className='text-lg w-full flex justify-center font-["Mont"]'>Vite</span></div>
            <div className="hover:scale-110 transition-all ease-in-out duration-200 text-[10vw] lg:text-[5vw] xl:text-[4vw] flex flex-col items-center leading-0"><TbBrandCpp /><span className='text-lg w-full flex justify-center font-["Mont"]'>C++</span></div>
            <div className="hover:scale-110 transition-all ease-in-out duration-200 text-[10vw] lg:text-[5vw] xl:text-[4vw] flex flex-col items-center leading-0"><FaC /><span className='text-lg w-full flex justify-center font-["Mont"]'>C</span></div>
            <div className="hover:scale-110 transition-all ease-in-out duration-200 text-[10vw] lg:text-[5vw] xl:text-[4vw] flex flex-col items-center leading-0"><FaPython /><span className='text-lg w-full flex justify-center font-["Mont"]'>Python</span></div>
            <div className="hover:scale-110 transition-all ease-in-out duration-200 text-[10vw] lg:text-[5vw] xl:text-[4vw] flex flex-col items-center leading-0"><TbBrandOauth /><span className='text-lg w-full flex justify-center font-["Mont"]'>Oauth</span></div>
            <div className="hover:scale-110 transition-all ease-in-out duration-200 text-[10vw] lg:text-[5vw] xl:text-[4vw] flex flex-col items-center leading-0"><IoLogoFirebase /><span className='text-lg w-full flex justify-center font-["Mont"]'>Fire Base</span></div>
            <div className="hover:scale-110 transition-all ease-in-out duration-200 text-[10vw] lg:text-[5vw] xl:text-[4vw] flex flex-col items-center leading-0"><SiEjs /><span className='text-lg w-full flex justify-center font-["Mont"]'>EJS</span></div>
            <div className="hover:scale-110 transition-all ease-in-out duration-200 text-[10vw] lg:text-[5vw] xl:text-[4vw] flex flex-col items-center leading-0"><SiPostman /><span className='text-lg w-full flex justify-center font-["Mont"]'>Postman</span></div>
            <div className="hover:scale-110 transition-all ease-in-out duration-200 text-[10vw] lg:text-[5vw] xl:text-[4vw] flex flex-col items-center leading-0"><SiTypescript /><span className='text-lg w-full flex justify-center font-["Mont"]'>TS</span></div>
            <div className="hover:scale-110 transition-all ease-in-out duration-200 text-[10vw] lg:text-[5vw] xl:text-[4vw] flex flex-col items-center leading-0"><TbBrandFramerMotion /><span className='text-lg w-full flex justify-center font-["Mont"]'>FM</span></div>
            <div className="hover:scale-110 transition-all ease-in-out duration-200 text-[10vw] lg:text-[5vw] xl:text-[4vw] flex flex-col items-center leading-0"><FaGitAlt /><span className='text-lg w-full flex justify-center font-["Mont"]'>Git</span></div>
            <div className="hover:scale-110 transition-all ease-in-out duration-200 text-[10vw] lg:text-[5vw] xl:text-[4vw] flex flex-col items-center leading-0"><FaGithub /><span className='text-lg w-full flex justify-center font-["Mont"]'>GitHub</span></div>
        </div>
    </div>
    
    <div id="hobbies" className="w-7/10 mx-auto bg-gray-200 rounded-3xl mb-20 p-[6vw] flex flex-col ">
        <h1 className='text-[4vw] text-zinc-600 lg:text-[2vw] w-full h-1/4 font-["Founders"]'>Hobbies</h1>
        <div className='w-full grid grid-cols-2 mt-6 gap-20 flex-wrap'>
        <div className=" transition-all text-zinc-600 ease-in-out duration-200 flex flex-col leading-0 font-['Founders'] "><h1 className='text-3xl'>Skating</h1><span className='text-xl  '>District Gold🥇</span></div>
        <div className=" transition-all text-zinc-600 ease-in-out duration-200 flex flex-col leading-0 font-['Founders'] "><h1 className='text-3xl'>Swimming</h1><span className='text-xl  '>School Silver🥈</span></div>
        <div className=" transition-all text-zinc-600 ease-in-out duration-200 flex flex-col leading-0 font-['Founders'] "><h1 className='text-3xl'><SiYoutubegaming /></h1><span className='text-xl  '>GAMING</span></div>
        <div className=" transition-all text-zinc-600 ease-in-out duration-200 flex flex-col leading-0 font-['Founders'] "><h1 className='text-5xl'><CgGym /></h1><span className='text-2xl  '>GYM</span></div>
        </div>
    </div>
    
    </>
  )
}

export default about