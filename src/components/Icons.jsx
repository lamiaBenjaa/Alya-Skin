import React from 'react'
import { PiFlowerLotusThin } from "react-icons/pi";
import { motion } from 'framer-motion';
import icon1 from './../images/icon1.jpg'
import icon2 from './../images/icon2.jpg'
import icon3 from './../images/icon3.jpg'
import icon4 from './../images/icon4.jpg'
import { Link } from 'react-router-dom';

export default function Icons() {
  return (
    <div className='py-14 space-y-16'>
       <div className=' w-[90%] m-auto grid grid-cols-3  text-gray-950'>
          <div className='space-y-3 col-span-1'>
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
            className='text-6xl font-bold space-x-3'><PiFlowerLotusThin className='inline  text-start'/><p className='inline'>Alya Skin</p></motion.h1>
            <motion.p
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
            className='text-lg'>Simple ,Clean , Easy-to-use essentials.</motion.p>
          </div>
          <div className='col-span-2'>
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
            className='text-lg'>Indulge your skin in the luxurious embrace of Alya,
             where every product is a harmonious blend of nature's bounty and scientific innovation.
              Experience the transformative power of our skincare rituals, meticulously crafted to 
              unveil your skin's radiant beauty. Embrace the journey to a luminous complexion,
               where every application is a moment of self-care and rejuvenation.</motion.p>
          </div>
        </div> 
        <motion.div
         initial={{
          scale:0.5
         }}
         whileInView={{
          scale:1
         }}
         transition={{
          duration:0.5,
         }}
        className='grid md:grid-cols-4 grid-cols-2 border-4 border-red-200 w-[80%] m-auto px-16 py-6'>
           <Link to='/Product'>
           <motion.div
            whileHover={{
              scale:1.1
            }}
            transition={{
              duration:0.5
            }}
           className=''>
              <img src={icon1} alt="" className='w-44 h-28 lg:h-auto m-auto' />
              <div className='w-[90%]'>
                 <h1 className='text-center font-bold'>Facial Treatement</h1>
                 <p className='text-center text-gray-500'>"Revitalize Your Radiance; Facial Treatments Reimagined"</p>
              </div>
           </motion.div>
           </Link>
           <Link to='/Product'>
           <motion.div
            whileHover={{
              scale:1.1
            }}
            transition={{
              duration:0.5
            }}
           className=''>
             <img src={icon2} alt="" className='w-44 h-28 lg:h-auto m-auto'/>
           <div className='w-[90%]'>
              <h1 className='text-center font-bold'>Skin Tightening</h1>
              <p className='text-center text-gray-500'>"Rediscover Your Youth; Skin Tightening Solutions"</p>
           </div>
           </motion.div>
           </Link>
           <Link to='/'>
            <motion.div
           whileHover={{
            scale:1.1
          }}
          transition={{
            duration:0.5
          }}
           className=''>
             <img src={icon3} alt="" className='w-44 h-28 lg:h-auto m-auto'/>
             <div className='w-[90%]'>
               <h1 className='text-center font-bold'>Hydra Facial</h1>
               <p className='text-center text-gray-500'>"Hydra Facial; Unveil Your Skin's Hydration Oasis"</p>
             </div>
           </motion.div>
           </Link>
           <Link to='/Product'>
            <motion.div
            whileHover={{
              scale:1.1
            }}
            transition={{
              duration:0.5
            }}
           className=''>
             <img src={icon4} alt="" className='w-44 h-28 lg:h-auto m-auto'/>
             <div className='w-[90%] '>
             <h1 className='text-center font-bold'>Healthy Products</h1>
             <p className='text-center text-gray-500'>"Nourish Naturally; Healthy Products for Radiant Skin"</p>
             </div>
           </motion.div>
           </Link>
           
        </motion.div>
    </div>
    
  )
}
