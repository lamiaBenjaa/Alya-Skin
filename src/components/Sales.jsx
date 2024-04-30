import React from 'react'
import s1 from './../images/s1.jpg'
import s2 from './../images/s2.jpg'
import s3 from './../images/s3.jpg'
import s4 from './../images/s4.jpg'
import { motion } from 'framer-motion'

export default function Sales() {
  return (
    <div className='py-10'>
      <div className="text-center py-10 space-y-3">
          <motion.h1
            initial={{
               opacity:0,
               x:-57,
             }}
             whileInView={{
               opacity:1,
               x:0,
             }}
             transition={{
               duration:0.5,
             }}
          className='text-5xl font-extrabold text-gray-900'>Complete SkinCare Bundle</motion.h1>
          <motion.p
           initial={{
            opacity:0,
            x:57,
          }}
          whileInView={{
            opacity:1,
            x:0,
          }}
          transition={{
            duration:0.5,
          }}
          className='text-lg px-5'>Save your Money and Get a free skin care products with every complete skinCare bundle</motion.p>
      </div>
      <div className="w-[90%] m-auto grid grid-cols-2 lg:grid-cols-4 gap-10 ">
         <div className='space-y-5'>
            <img src={s1} alt="" />
            <div className='text-center space-y-2'>
               <div><button className='w-full border-2 py-1 border-gray-800 text-gray-800 font-semibold text-lg'>Buy it Now</button> </div>
               <div><button className='w-full border-2 py-1 bg-red-300 text-red-50 font-semibold text-lg'>Add To Card</button> </div>
            </div>
         </div>
         <div className='space-y-5'>
           <img src={s2} alt="" />
           <div className='text-center space-y-2'>
               <div><button className='w-full border-2 py-1 border-gray-800 text-gray-800 font-semibold text-lg'>Buy it Now</button> </div>
               <div><button className='w-full border-2 py-1 bg-red-300 text-red-50 font-semibold text-lg'>Add To Card</button> </div>
            </div>
         </div>
         <div className='space-y-5'>
            <img src={s3} alt="" />
            <div className='text-center space-y-2'>
               <div><button className='w-full border-2 py-1 border-gray-800 text-gray-800 font-semibold text-lg'>Buy it Now</button> </div>
               <div><button className='w-full border-2 py-1 bg-red-300 text-red-50 font-semibold text-lg'>Add To Card</button> </div>
            </div>
         </div>
         <div className='space-y-5'>
           <img src={s4} alt="" />
           <div className='text-center space-y-2'>
               <div><button className='w-full border-2 py-1 border-gray-800 text-gray-800 font-semibold text-lg'>Buy it Now</button> </div>
               <div><button className='w-full border-2 py-1 bg-red-300 text-red-50 font-semibold text-lg'>Add To Card</button> </div>
            </div>
         </div>
      </div>
    </div>
  )
}
