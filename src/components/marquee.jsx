import { motion } from 'framer-motion'
import React from 'react'

const marquee = () => {
  return (
    <div className='w-full lg:pt-20 lg:pb-40 py-20 -mb-5 -mt-4 sm:-mt-10 rounded-tl-3xl rounded-tr-3xl bg-zinc-600'>
      <div className='text border-t-2 border-b-2 overflow-hidden border-zinc-500 text whitespace-nowrap flex'>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='lg:text-[20vw] sm:text-[30vw] sm:pt-[5vw] text-[50vw] leading-none uppercase -mb-[3vw] pt-[15vw] lg:pt-[5vw] xl:-mb-[4vw] xl:pt-[2.5vw] font-["Founders"] pr-10'>⸱Coffee⸱Code⸱Create</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='lg:text-[20vw] sm:text-[30vw] sm:pt-[5vw] text-[50vw] leading-none uppercase -mb-[3vw] pt-[15vw] lg:pt-[5vw] xl:-mb-[4vw] xl:pt-[2.5vw] font-["Founders"] pr-10'>⸱Coffee⸱Code⸱Create</motion.h1>
      </div>
    </div>
  )
}

export default marquee