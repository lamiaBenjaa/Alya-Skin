import React from 'react'
import g5 from './../images/Girls2.jpg'
import new3 from './../images/Girls3.jpg'
import girls3 from './../images/NewGirls3.jpg'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Coverture() {
  return (
    <div className="w-full ">
        <div className='text-center py-8 space-y-2'>
            <motion.h1
            initial={{
               x:-60,
               opacity:0
            }}
            whileInView={{
               x:0,
               opacity:1
            }}
            transition={{
               duration:0.5,
            }}
            className='text-6xl font-bold text-gray-950 w-[80%] lg:w-[50%] m-auto'>Cosmetics For You And For Your Related</motion.h1>
            <motion.p
            initial={{
               x:60,
               opacity:0
            }}
            whileInView={{
               x:0,
               opacity:1
            }}
            transition={{
               duration:0.5,
            }}
            className='text-lg w-[90%] m-auto'>'Effective Skin care begins with a thorought but careful cleansing and toning.'</motion.p>
        </div>
      <div className='grid grid-cols-3 gap-2 w-[95%] m-auto py-12 h-[600px]'>
        <motion.div
         initial={{
            x:-50,
            opacity:0
         }}
         whileInView={{
            x:0,
            opacity:1
         }}
         transition={{
            duration:0.5,
         }}
         className='col-span-2 h-full row-span-2 w-full overflow-hidden relative m-auto'>
            <img src={g5} alt="cover " className='absolute inset-0 object-cover w-full h-full' />
            <div className='absolute inset-0 bg-gray-900 bg-opacity-40'></div>
            <motion.div
             initial={{
                x:-50,
                opacity:0
             }}
             whileInView={{
                x:0,
                opacity:1
             }}
             transition={{
                duration:0.5,
             }}
            className='relative py-[25%]  text-center space-y-6'>
                <h1 className='tracking-wider text-white text-3xl px-4 text-opacity-90 font-bold'>Discover mindful , timeless beauty </h1>
                <Link to='/Product' ><button className='bg-red-50  bg-opacity-40 px-2 py-2 hover:bg-opacity-80 font-bold text-gray-900 text-xl rounded-lg drop-shadow-2xl shadow-gray-300 text-opacity-95 hover:ring-2 hover:ring-red-200 hover:scale-105 duration-300 shadow-inner'>Show more</button></Link>
            </motion.div>
        </motion.div>
        <motion.div
         initial={{
            x:50,
            opacity:0
         }}
         whileInView={{
            x:0,
            opacity:1
         }}
         transition={{
            duration:0.5,
         }}
        className='relative overflow-hidden'>
        <img src={new3} alt="cover " className='absolute inset-0 object-cover w-full h-full ' />
            <div className='absolute inset-0 bg-gray-900 bg-opacity-40'></div>
            <motion.div
             initial={{
                x:50,
                opacity:0
             }}
             whileInView={{
                x:0,
                opacity:1
             }}
             transition={{
                duration:0.5,
             }}
            className=' relative text-center py-[30%] md:py-[40%] lg:py-[15%] space-y-4'>
                <h1 className='tracking-wider text-white text-3xl text-center  md:text-4xl lg:text-5xl xl:text-7xl font-extrabold text-opacity-90'>15%</h1>
                <button className='bg-red-50 px-3 py-1 bg-opacity-40 hover:bg-opacity-80 font-bold text-gray-900 text-lg rounded-lg drop-shadow-2xl shadow-gray-300 text-opacity-95 hover:ring-2 hover:ring-red-200 hover:scale-105 duration-300 shadow-inner'>Discover</button>
            </motion.div>
        </motion.div>
        <motion.div
         initial={{
            x:50,
            opacity:0
         }}
         whileInView={{
            x:0,
            opacity:1
         }}
         transition={{
            duration:0.5,
         }}
        className='relative overflow-hidden'>
        <img src={girls3} alt="cover " className='absolute inset-0 object-cover w-full h-full' />
            <div className='absolute inset-0 bg-gray-900 bg-opacity-40'></div>
            <motion.div
             initial={{
                x:50,
                opacity:0
             }}
             whileInView={{
                x:0,
                opacity:1
             }}
             transition={{
                duration:0.5,
             }}
            className='relative text-center py-[25%]'>
              <h1 className='tracking-wider text-white text-3xl text-center  md:text-4xl lg:text-5xl xl:text-7xl font-extrabold text-opacity-90'>Trending</h1>
              <p className='tracking-wider text-white text-xl text-center text-opacity-90'>Find beauty and define yourself .</p>
            </motion.div>
        </motion.div>
    </div>
    </div>
    
  )
}
