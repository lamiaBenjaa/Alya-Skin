import React from 'react';
import img from '../images/allWater.jpg'
import {motion} from 'framer-motion'
import img2 from './../images/dropWater.jpg'

const Hero = () => {
    return (
        <>
        {/* <div className=' w-full m-auto bg-gradient-to-t from-white via-red-50 to-red-50'>
            <img src={img} alt='product' className=' w-[90%] m-auto h-[90vh] bg-no-repeat bg-cover object-cover py-10 rounded-[200px] drop-shadow'/>
           <div className='md:w-[65%] w-[80%]  text-center absolute top-[27%]  md:top-[30%] md:left-[18%] left-[10%] px-12 md:px-0 space-y-12 sm:space-y-16 lg:space-y-24'>
             <div className='px-0 lg:px-12 md:px-10 space-y-5 md:space-y-8'>
             <motion.h2 
              initial={{
                opacity:0,
                y:-57,
              }}
              animate={{
                opacity:1,
                y:0
              }}
              transition={{
                duration:1,
              }}
             className='xl:px-16 text-red-100 drop-shadow-xl font-bold text-5xl lg:text-6xl'>"Radiant Skincare Solutions for Healthy , Glowing Skin"</motion.h2>
             <motion.p
              initial={{
                opacity:0,
                y:-57,
              }}
              animate={{
                opacity:1,
                y:0
              }}
              transition={{
                duration:1,
              }}
             className='text-white font-lamia text-xl'>"Unlock the secret to youthful, radiant skin with our premium skincare collection designed to revitalize and nourish your complexion from within."</motion.p>
             </div>
             <div className='space-x-1 md:space-x-8  '>
                <motion.input 
                 whileFocus={{scale:1.1}}
                type='text' placeholder='Search ... '
                className='bg-white opacity-70 font-semibold text-md md:text-lg lg:text-xl w-[200px] md:w-[280px] lg:w-[380px] h-8 lg:h-10 rounded-lg px-3' />
                <motion.button
                 whileHover={{scale:1.1}}
                className='bg-red-100 font-semibold text-lg  lg:text-xl w-24 md:w-28 lg:w-36  md:h-9 lg:h-10  rounded-xl hover:ring hover:ring-red-200 '>Search</motion.button>
             </div>
           </div>
        </div> */}
          <div className='relative'>
      <img src={img} alt="" className=' w-full object-cover  h-[500px] shadow-xl shadow-gray-100 '/>
         <div className='absolute inset-0 bg-gray-800 bg-opacity-20 shadow-inner shadow-gray-300'>
         </div>
         <div className='absolute inset-0 flex items-end  pl-10 align-bottom'>
            <p className='w-[50%]  text-gray-50 text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-28 text-center font-italic'>Experience radiant beauty with Alya Skin's luxurious Australian botanical skincare.</p>
         </div>
         <div className='absolute inset-0 flex justify-end text-center items-end pb-28  w-[80%] m-auto font-italic text-gray-800 '><p className='text-gray-50 text-5xl lg:text-7xl py-2  '>Alya Skin</p></div>
         <button className='absolute inset-0 flex justify-end text-center items-end pb-12 w-[80%] m-auto text-xl font-bold text-gray-800 '> <p className='bg-red-50 rounded-md px-7 py-2 shadow-xl mx-2 border-2 border-gray-200 opacity-80 hover:opacity-95'>Shop Now</p></button>
      </div>
        </>
    )
}

export default Hero;