import React from 'react'
import Nav from './components/navbar'
import Rough from './components/roughTiles'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import Marquee from './components/marquee'


const App = () => {
  return (
    <>
    <Nav />
    <div id='main' className="main pb-[10vw] pt-[30vw] sm:pt-[20vw] lg:pt-[12vw] xl:pt-[10vw] px-[3vw] w-full overflow-hidden">
      <div className="myself flex flex-col xl:flex-row items-center justify-center xl:gap-[2vw] sm:gap-[8vw] gap-[10vw] w-full xl:h-[25vw] xl:px-[3vw] ">
        <div className="photo xl:w-1/3 w-[50vw] h-[50vw] md:w-[30vw] md:h-[30vw] lg:w-[30vw] overflow-hidden lg:h-[30vw] bg-gray-200 xl:h-full rounded-4xl">
          <img id='image' src="Myself.jpg" className='w-full h-full object-cover object-center' alt="" />
        </div>
        <div className="details xl:w-4/5 bg-gray-200 w-3/4 overflow-hidden flex gap-10 py-15 items-center flex-col lg:flex-row justify-center lg:h-100  xl:h-full rounded-4xl capitalize font-['Founders']">
            <div className='text-zinc-600 flex flex-col items-start pl-[8vw] leading-[6vw] lg:leading-[4vw] justify-center'>
              <h1 className='text-[5.5vw] lg:text-[3.5vw]'>Hello👋 ,</h1>
              <h1 className='text-[4.5vw] lg:text-[2.5vw]'>I Am Somasekar</h1>
              <h1 className='text-[4.5vw] lg:text-[2.5vw]'>A full stack web developer</h1>
              <h1 className='text-[5.5vw] lg:text-[3.5vw] text-zinc-700'>Welcome to my digital space</h1>
            </div>
            <div className=' lg:hidden h-fit flex text-4xl gap-6 '>
            <a target='_blank' href="https://www.linkedin.com/posts/somasekar-naidu-841646320_hackathon-fintech-ai-activity-7318672541546418177-6CaY?utm_source=share&utm_medium=member_android&rcm=ACoAAFFAuTEB-V8H8Y59NcUqLsy-P3ftYUUhmpQ"><CiLinkedin /></a>
            <a target='_blank' href="https://github.com/SOMASEKAR17"><FiGithub /></a>
            <a target='_blank' href="https://www.instagram.com/yk.shxpvt_/"><FaInstagram /></a>
            </div>
            <div className='w-1/4 h-full flex-col items-center gap-5 justify-center hidden lg:flex '>
              <div className='h-1/4 w-1/2 text-6xl flex items-center'><a target='_blank' className='flex items-center' href="https://www.linkedin.com/posts/somasekar-naidu-841646320_hackathon-fintech-ai-activity-7318672541546418177-6CaY?utm_source=share&utm_medium=member_android&rcm=ACoAAFFAuTEB-V8H8Y59NcUqLsy-P3ftYUUhmpQ"><CiLinkedin /><span className='text-xl'>LinkedIn</span></a></div>
              <div className='h-1/4 w-1/2 text-6xl flex items-center'><a target='_blank' className='flex items-center' href="https://github.com/SOMASEKAR17"><FiGithub /><span className='text-xl'>gitHub</span></a></div>
              <div className='h-1/4 w-1/2 text-6xl flex items-center'><a target='_blank' className='flex items-center' href="https://www.instagram.com/yk.shxpvt_/"><FaInstagram /><span className='text-xl'>instagram</span></a></div>
            </div>
        </div>
      </div>
    </div>
    <Rough />
    <Marquee />
  
    </>
  )
}

export default App