import React from 'react'

import Nav from './components/navbar'

const projects = () => {
     
  return (
    <>
    <Nav />
    <div className='w-full min-h-screen p-[12vw] lg:p-[10vw] gap-[2vw] lg:gap-[5vw] grid grid-cols-1 lg:grid-cols-2'>
            <div className=' bg-gray-100 py-10 flex flex-col items-center rounded-3xl h-full'>
                <h1 className='font-[Founders] text-4xl text-gray-700'>Full Stack Projects</h1>
                <h2 className='font-[Mont]'>FintechX</h2>
                <div className='w-full h-3/4 rounded-md overflow-hidden'><img className='w-full h-full object-cover object-center' src="fin6.png" alt="" /></div>
                <h2 className='font-[Mont] mt-3'><a href="https://www.linkedin.com/posts/somasekar-naidu-841646320_hackathon-fintech-ai-activity-7318672541546418177-6CaY?utm_source=share&utm_medium=member_android&rcm=ACoAAFFAuTEB-V8H8Y59NcUqLsy-P3ftYUUhmpQ" target='_blank'>More Details ↗</a></h2>
            </div>
            <div className=' bg-gray-100 py-10 flex flex-col items-center rounded-3xl h-full'>
            <h1 className='font-[Founders] text-4xl text-gray-700'>Other</h1>
                <div className='flex flex-wrap gap-10 items-center justify-center'>
                    <div className=' w-[30vw] md:w-1/3 overflow-hidden'>
                        <img className='h-[170px] object-cover w-[400px] rounded-xl ' src="amazzon.png" alt="" />
                        <h2 className='font-[Mont] text-center'>Amazon clone</h2>
                    </div>
                    <div className=' w-[30vw] md:w-1/3 overflow-hidden'>
                        <img className='h-[170px] object-cover w-[400px] rounded-xl ' src="samsung.png" alt="" />
                        <h2 className='font-[Mont] text-center'>Samsung clone</h2>
                    </div>
                    <div className=' w-[30vw] md:w-1/3 overflow-hidden'>
                        <img className='h-[170px] object-cover w-[400px] rounded-xl ' src="agency.png" alt="" />
                        <h2 className='font-[Mont] text-center'>Agency clone</h2>
                    </div>
                    <div className=' w-[30vw] md:w-1/3 overflow-hidden'>
                        <img className='h-[170px] object-cover w-[400px] rounded-xl ' src="mv.png" alt="" />
                        <h2 className='font-[Mont] text-center'>Movie Vault</h2>
                    </div>
                    
                    
                </div>
            </div>
        </div>
            <div className='text-xl text-center w-full -mt-10 font-["Mont"] md:-mt-20 lg:-mt-20 xl:-mt-30'>More Coming Soon...</div>
        
    </>
  )
}

export default projects