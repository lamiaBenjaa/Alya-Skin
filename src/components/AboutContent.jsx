import React from 'react'
import img from './../images/NewGirls.jpg'
import { GiTeamIdea } from "react-icons/gi";
import p1 from './../images/p1.jpg'
import p2 from './../images/p2.jpg'
import p3 from './../images/p3.jpg'
import bg1 from './../images/allPink.jpg'
import bg2 from './../images/bg.jpg'
import { motion } from 'framer-motion';

export default function AboutContent() {
  return (
    <>
  
    <div className='grid md:grid-cols-2 grid-cols-1 md:gap-10 py-12 lg:py-14 w-[90%] m-auto'>
       <div className='text-center py-[10%] md:py-[15%] space-y-5'>
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
            className=' text-transparent bg-clip-text bg-gradient-to-tr from-slate-500 to-red-400 text-5xl font-extrabold'>Why Choose Alya Skin </motion.h1>
            <motion.p
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
            className='text-lg'>Discover why Alya Skin stands out in the skincare industry.
                We prioritize your skin's health and beauty by infusing 
                our products with the finest natural ingredients, sourced
                from the pristine landscapes of Australia. Our formulas
                are meticulously crafted to deliver visible results, 
                leaving your skin rejuvenated and glowing.<p className='hidden lg:flex'>With a focus on
                sustainability and cruelty-free practices, we ensure that every 
                step of your skincare journey is ethical and environmentally responsible. 
                Choose Alya Skin for a transformative experience that nurtures your skin
                while embracing the beauty of nature.</p>
            </motion.p>
            <motion.button
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
            className='bg-gradient-to-tr from-slate-500 to-red-400 px-5 py-2 text-xl text-gray-50 font-semibold rounded-md'>Discover more</motion.button>
       </div>
       <motion.div
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
       className=' max-w-[600px] m-auto'>
         <img src={img} alt=""className='rounded-xl shadow-lg' />
       </motion.div>

    </div>

    
    <div className=''>
          <div className='grid  md:grid-cols-4 space-y-3 md:space-y-0  w-[90%] m-auto text-center'>
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
              className='md:col-span-1 text-4xl font-extrabold text-gray-900  flex space-x-4 md:border-r-4  md:border-red-300 '><GiTeamIdea className='text-red-300 text-4xl'/><p >Meet Our Team</p></motion.h1>
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
              className='md:col-span-3 px-4 text-lg'>"At Alya Skin, our team is driven by a shared passion for skincare innovation and natural beauty. With expertise and dedication, we meticulously craft each product to deliver transformative results. Trust our team to bring you the best in skincare, meticulously formulated with care and integrity."</motion.p>
          </div>
          <div className='w-[90%] m-auto my-12 py-6 grid md:grid-cols-3 gap-4 border-4 border-gray-100 rounded-md'>
              <motion.div
               whileHover={{
                scale:1.05
               }}
               transition={{
                duration:0.5
               }}
              className='text-center space-y-2'>
                  <img src={p2} alt="" className=' rounded-full w-[250px] h-[300px] object-cover m-auto drop-shadow-xl'/>
                  <h1 className='font-bold text-xl'>Sofia Nguyen</h1>
                  <p className='font-semibold'> Founder and CEO</p>
                  <p className='text-gray-500'>Responsible for setting the vision and direction of Alya Skin</p>
              </motion.div>
              <motion.div
               whileHover={{
                scale:1.05
               }}
               transition={{
                duration:0.5
               }}
              className='text-center space-y-2'>
                  <img src={p1} alt="" className=' rounded-full w-[250px] h-[300px] object-cover m-auto drop-shadow-xl'/>
                  <h1 className='font-bold text-xl'>Sofia Nguyen</h1>
                  <p className='font-semibold'> Founder and CEO</p>
                  <p className='text-gray-500'>Responsible for setting the vision and direction of Alya Skin</p>
              </motion.div>
              <motion.div
               whileHover={{
                scale:1.05
               }}
               transition={{
                duration:0.5
               }}
              className='text-center space-y-2'>
                  <img src={p3} alt="" className=' rounded-full w-[250px] h-[300px] object-cover m-auto drop-shadow-xl'/>
                  <h1 className='font-bold text-xl'>Sofia Nguyen</h1>
                  <p className='font-semibold'> Founder and CEO</p>
                  <p className='text-gray-500'>Responsible for setting the vision and direction of Alya Skin</p>
              </motion.div>
          </div>
       </div>



       <div className='pt-10'>
          <div className='text-center space-y-3'>
               <motion.h1
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
               className='text-6xl font-extrabold text-gray-900'>Our Collections</motion.h1>
               <motion.p
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
               className='text-lg'>"Discover All of our Products"</motion.p>
          </div>
          <div className='grid md:grid-cols-2 gap-3 w-[90%] m-auto pt-14 pb-10'>
              <img src={bg1} alt="" className=' object-cover w-full h-full rounded-lg drop-shadow-xl shadow-red-50'/>
              <img src={bg2} alt="" className=' object-cover w-full h-full rounded-lg drop-shadow-xl shadow-red-50'/>
          </div>
       </div>
      </>
  )
}
