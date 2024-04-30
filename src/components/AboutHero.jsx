import React from 'react'
import img from './../images/dropWater.jpg'
import { motion } from 'framer-motion'

export default function AboutHero() {
  return (
    <div>
        <div className='relative'> 
      <img src={img} alt="" className=' w-full object-cover  h-[400px] '/>
         <div className='absolute inset-0 bg-gray-800 bg-opacity-20 shadow-inner shadow-gray-300'>
         </div>
         <div className='absolute inset-0 flex items-end mb-8 align-bottom'>
            <p className='w-full m-auto px-10 py-1 bg-red-100 shadow-inner shadow-gray-300 text-gray-800 text-xl md:text-2xl lg:text-3xl mb-14 text-center font-semibold '>Experience radiant beauty with Alya Skin's luxurious Australian botanical skincare.</p>
         </div>
         <motion.div
          initial={{
            opacity:0,
            y:-100,
          }}
          whileInView={{
            opacity:1,
            y:0,
          }}
          transition={{
            duration:0.5,
          }}
         className='absolute inset-0 flex justify-center items-center text-center w-[90%]  m-auto text-3xl font-bold text-gray-800 space-x-3'><p className='text-gray-50 text-8xl  py-2 '>About Us</p></motion.div>
         {/* <button className='absolute inset-0 flex justify-end items-end pb-12 text-end w-[80%] m-auto text-lg font-bold text-gray-800 '> <p className='bg-red-50 px-7 py-2 shadow-xl mx-2 border-2 border-gray-200 opacity-80 hover:opacity-95'>Shop Now</p></button> */}
      </div>
    </div>
  )
}
{/* <img src={s} alt="" className='w-14' /> */}