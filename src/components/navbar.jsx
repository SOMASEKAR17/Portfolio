import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const nav = () => {

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const [isclicked,setclicked] = useState(false);

  return (
    <motion.div initial={{translateY:0}} animate={showNavbar ? {translateY:"0"} : {translateY:"-200px"}} transition={{ease: [0.22,1,0.36,1],delay: 0.2}} className={`fixed z-[999] h-30 w-full  ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className=' w-full relative pt-3 md:pt-8 md:pb-6 pb-10 flex justify-between backdrop-blur-md'>
        <div className="justify-center relative w-full flex gap-10">
          <h1 className='font-[Mont] absolute left-[5vw] text-xl'>Somasekar Naidu</h1>
          <button id="menu-toggle" onClick={()=>setclicked(!isclicked)} className="md:hidden text-black absolute right-[5vw] ">{!isclicked ? "☰" : "✖"}</button>
            {["home","about","projects","contact"].map((item,index)=>(
              <a key={index} id={item} className={`text-xl transition-all ease-in duration-100 hidden md:inline hover:scale-105 hover:-translate-y-[1px] capitalize font-["Mont"] tracking-wide ${index==0 ? "ml-40":""} `}>{<Link to={`/${item}`}>{item}</Link>}</a>
            ))}
        </div>
        <motion.div initial={{x:"200px"}} animate={isclicked ? {x:"0"} : {x:"200px"}} transition={{ease: [0.22,1,0.36,1],delay: 0.2}} className="w-30 absolute top-15 right-5 h-30 rounded-4xl items-center backdrop-blur-md justify-center text-black flex flex-col font-[Mont]">
            {["home","about","projects","contact"].map((item,index)=>(
                <motion.a initial={{x:"200px"}} animate={isclicked ? {x:"0"} : {x:"200px"}} transition={{ease: [0.22,1,0.36,1],delay: index*0.03}} key={index} className={` transition-all md:hidden ease-in duration-100 backdrop-blur-md hover:scale-105 hover:-translate-y-[1px] capitalize font-["Mont"] tracking-wide `}>{<Link to={`/${item}`}>{item}</Link>}</motion.a>
              ))}</motion.div>
      </div>
    </motion.div>
    

  )
}

export default nav