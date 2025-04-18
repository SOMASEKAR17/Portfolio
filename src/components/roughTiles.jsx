import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const roughTiles = () => {
  const [animateScroll, setAnimateScroll] = useState(false);


    const timer = setTimeout(() => {
        setAnimateScroll(!animateScroll);
      }, 1500);
  return (
    <div data-scroll-section data-scroll data-scroll-speed=".1" className='w-full min-h-screen bg-gray-400 pb-[5vw] pt-3 text-gray-100  px-[8vw] rounded-tl-3xl rounded-tr-3xl'>
      <div className='w-full lg:h-[4vw]  flex justify-center mb-3 items-center flex-col '>
            <p className={`relative transition-all text-white/60 duration-1000 ease-out ${animateScroll ? 'top-0' : 'top-[20px]'}`}>Scroll Down</p>
            <div className='w-full -mt-1 z-[99] h-[30px] bg-gray-400'></div>
        </div>
      <h1 className='font-["Founders"] text-5xl mb-10'>Overview</h1>
      <div className="container rounded-3xl shadow-xl lg:grid-cols-3  p-2 bg-gray-500 grid-flow-row-dense grid grid-cols-2 gap-2 w-full h-[150vw] sm:h-[100vw] md:h-[60vw] lg:h-[50vw]">
        <div className="group lg:col-span-1 rounded-3xl relative gap-2 flex items-center justify-center  bg-gray-200 min-h-[50px]">
        <h1 className='font-["Founders"] text-5xl text-zinc-600'><Link to="/about#start">About Me</Link></h1>
          <div className='w-2 h-2 rounded-full hidden sm:inline mb-2 ml-[1.5vw] group-hover:scale-400 transition-all ease-in duration-100 bg-zinc-600 '><span className=' hidden group-hover:flex items-center justify-center text-[8px] -translate-y-[2.5px] transition-all ease-in duration-100'>↗</span></div>
          </div>
        <div className="group lg: rounded-3xl relative gap-2 flex items-center justify-center bg-gray-200 min-h-[50px]">
          <h1 className='font-["Founders"] text-5xl text-zinc-600'><Link to="/about#mile">Milestones</Link></h1>
          <div className='w-2 h-2 rounded-full hidden sm:inline mb-2 ml-[1.5vw] group-hover:scale-400 transition-all ease-in duration-100 bg-zinc-600 '><span className=' hidden group-hover:flex items-center justify-center text-[8px] -translate-y-[2.5px] transition-all ease-in duration-100'>↗</span></div>
        </div>
        <div className="group lg:col-span-2 rounded-3xl relative gap-2 overflow-hidden flex-col flex items-center justify-center bg-gray-200 min-h-[50px] col-span-2 row-span-2">
          <h1 className='font-["Founders"] text-5xl text-zinc-600 sm:translate-y-3'><Link to="/projects">Projects?</Link></h1>
          <h3 className='text-lg text-zinc-600'>Here's a selection of what I've built.</h3>
          <div className='marquee h-1/2 w-full overflow-hidden py-2 flex gap-5 bg-zinc-600'>
          <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:20}} className='flex gap-3'>
            <div className='h-[270px] w-[390px]'><img className='w-full h-full object-cover rounded-xl' src="fin6.png" alt="" /></div>
            <div className='h-[270px] w-[390px]'><img className='w-full h-full object-cover rounded-xl' src="fin5.png" alt="" /></div>
            <div className='h-[270px] w-[390px]'><img className='w-full h-full object-cover rounded-xl' src="amazzon.png" alt="" /></div>
            <div className='h-[270px] w-[390px]'><img className='w-full h-full object-cover rounded-xl' src="samsung.png" alt="" /></div>
            <div className='h-[270px] w-[390px]'><img className='w-full h-full object-cover rounded-xl' src="mv.png" alt="" /></div>
          </motion.h1>
          <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:20}} className='flex gap-3'>
            <div className='h-[270px] w-[390px]'><img className='w-full h-full object-cover rounded-xl' src="fin6.png" alt="" /></div>
            <div className='h-[270px] w-[390px]'><img className='w-full h-full object-cover rounded-xl' src="fin5.png" alt="" /></div>
            <div className='h-[270px] w-[390px]'><img className='w-full h-full object-cover rounded-xl' src="amazzon.png" alt="" /></div>
            <div className='h-[270px] w-[390px]'><img className='w-full h-full object-cover rounded-xl' src="samsung.png" alt="" /></div>
            <div className='h-[270px] w-[390px]'><img className='w-full h-full object-cover rounded-xl' src="mv.png" alt="" /></div>
          </motion.h1>
          </div>
        </div>
        <div className="group lg:col-span-1 lg:row-span-3 relative flex-col flex items-center justify-center rounded-3xl bg-gray-200 min-h-[50px] col-span-2">
          <h1 className='font-["Founders"] text-5xl text-zinc-600 sm:translate-y-3'><Link to="/about#tech">Technology?</Link></h1>
            <h3 className='text-lg group-hover:scale-110 transition-all ease-in duration-100 text-zinc-600'>Go on, take a glance ↗</h3>
        </div>
        <div className="group lg: rounded-3xl relative flex-col flex items-center justify-center bg-gray-200 min-h-[50px]">
          <h1 className='font-["Founders"] text-5xl text-zinc-600 sm:translate-y-3'><Link to="/about#hobbies">Hobbies</Link></h1>
          <h3 className='text-lg group-hover:scale-110 transition-all ease-in duration-100 text-zinc-600'>If you are interested ↗</h3>
        </div>
        <div className="group lg:col-span-2 relative pl-[5vw] rounded-3xl flex-col flex items-start justify-center bg-gray-200 min-h-[50px]">
        <h1 className='font-["Founders"] text-5xl text-zinc-600 sm:translate-y-3'><Link to="/contact">Let's</Link></h1>
        <h1 className='font-["Founders"] w-full text-5xl text-zinc-600 sm:translate-y-3'><Link to="/contact">Connect</Link> <span className='absolute right-[3vw] hidden sm:inline'><Link to="/contact">↗</Link></span></h1>
        </div>
      </div>
    </div>
  )
}

export default roughTiles