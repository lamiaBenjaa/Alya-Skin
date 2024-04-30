import React from 'react'
import p1 from './../images/Créme.jpg'
import p2 from './../images/bMask.jpg'
import p3 from './../images/rCréme.jpg'
import p4 from './../images/n1.jpg'
import p5 from './../images/n2.jpg'
import p6 from './../images/n3.jpg'
import p7 from './../images/mask.jpg'
import p8 from './../images/spray.jpg'
import { IoBagAdd } from "react-icons/io5";
import { BiSolidShow } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { motion } from 'framer-motion'

export default function Products() {
  return (
    <div className=''>
   

      <div className='container m-auto py-10'>
         <div className='grid grid-cols-2'>
            <div className='w-[95%] m-auto space-y-2 py-4'>
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
              className='text-6xl font-extrabold text-gray-950'>Featured Products</motion.h1>
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
              className='text-xl'>"Our BestSellers"</motion.p>
           </div>
           <div>
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
            className='text-lg'>
               "Transform your skincare routine with Alya Skin, where radiant beauty meets natural indulgence. 
               Our carefully crafted products harness the power of Australian botanicals to rejuvenate and nourish your skin,
                leaving it glowing with vitality".
            </motion.p>
           </div>
         </div>
        

        <div className='py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[90%] m-auto drop-shadow-md'>
        <div>
            <img src={p4} alt="" className='object-cover w-full h-[320px] m-auto rounded-t-md'/>
             <div className='py-3 w-full px-3 m-auto bg-gray-50'>
                <h1 className='text-xl text-center font-bold'>Miracale Moisture</h1>
                <h1 className='text-gray-600'>Moisture whipped gel like texture and so hydrating.</h1>
                <div className='flex justify-between'>
                  <div className='flex justify-center items-center text-lg'>
                     <p className='font-semibold'>Price :</p><p>22,95$</p>
                  </div>
                  <div >
                    <h1 className='flex items-center justify-center space-x-1 bg-slate-400 p-1 rounded-md'><FaStar className='text-yellow-500'/><p className='font-semibold'>4.5</p></h1>
                  </div>
                  
                </div>
                <div className='pt-5 flex justify-end items-center space-x-3'>
                     <button className='bg-red-600 text-gray-50 font-semibold py-1 px-3 flex items-center space-x-1 rounded-md'><IoBagAdd/><p>Add</p></button>
                     <button className='bg-blue-600  text-gray-50 font-semibold py-1 px-3 flex items-center space-x-1 rounded-md'><BiSolidShow /><p>Details</p></button>
                </div>
             </div>
             </div>
          <div className=''>
             <img src={p8} alt="" className='object-cover w-full h-[320px] m-auto rounded-t-md'/>
             <div className=' py-3 w-full px-3 m-auto bg-gray-50'>
                <h1 className='text-xl text-center font-bold'>Foaming Cleanser</h1>
                <h1 className='text-gray-600'>Rejuvenate , hydrate and cleanse your skin deeply.</h1>
                <div className='flex justify-between'>
                  <div className='flex justify-center items-center text-lg'>
                     <p className='font-semibold'>Price :</p><p> 19,95$</p>
                  </div>
                  <div >
                    <h1 className='flex items-center justify-center space-x-1 bg-slate-400 p-1 rounded-md'><FaStar className='text-yellow-500'/><p className='font-semibold'>4.5</p></h1>
                  </div>
                  
                </div>
                <div className='pt-5 flex justify-end items-center space-x-3'>
                     <button className='bg-red-600 text-gray-50 font-semibold py-1 px-3 flex items-center space-x-1 rounded-md'><IoBagAdd/><p>Add</p></button>
                     <button className='bg-blue-600  text-gray-50 font-semibold py-1 px-3 flex items-center space-x-1 rounded-md'><BiSolidShow /><p>Details</p></button>
                </div>
             </div>
          </div>


          <div>
          <img src={p6} alt="" className='object-cover w-full h-[320px] m-auto rounded-t-md'/>
             <div className=' py-3 w-full px-3 m-auto bg-gray-50'>
                <h1 className='text-xl text-center font-bold'>Exfoliationg Sorbet</h1>
                <h1 className='text-gray-600'>Unique texture exfoliates the surface of the skin.</h1>
                <div className='flex justify-between'>
                  <div className='flex justify-center items-center text-lg'>
                     <p className='font-semibold'>Price :</p><p>24,95$</p>
                  </div>
                  <div >
                    <h1 className='flex items-center justify-center space-x-1 bg-slate-400 p-1 rounded-md'><FaStar className='text-yellow-500'/><p className='font-semibold'>3.5</p></h1>
                  </div>
                  
                </div>
                <div className='pt-5 flex justify-end items-center space-x-3'>
                     <button className='bg-red-600 text-gray-50 font-semibold py-1 px-3 flex items-center space-x-1 rounded-md'><IoBagAdd/><p>Add</p></button>
                     <button className='bg-blue-600  text-gray-50 font-semibold py-1 px-3 flex items-center space-x-1 rounded-md'><BiSolidShow /><p>Details</p></button>
                </div>
             </div>
          </div>

          <div>
          <img src={p1} alt="" className='object-cover w-full h-[320px] m-auto rounded-t-md'/>
             <div className=' py-3 w-full px-3 m-auto bg-gray-50'>
                <h1 className='text-xl text-center font-bold'>Native Moisturiser</h1>
                <h1 className='text-gray-600'>Rehydrate, restructure and repair your skin smoothly.</h1>
                <div className='flex justify-between'>
                  <div className='flex justify-center items-center text-lg'>
                     <p className='font-semibold'>Price :</p><p>24,95$</p>
                  </div>
                  <div >
                    <h1 className='flex items-center justify-center space-x-1 bg-slate-400 p-1 rounded-md'><FaStar className='text-yellow-500'/><p className='font-semibold'>4.0</p></h1>
                  </div>
                  
                </div>
                <div className='pt-5 flex justify-end items-center space-x-3'>
                     <button className='bg-red-600 text-gray-50 font-semibold py-1 px-3 flex items-center space-x-1 rounded-md'><IoBagAdd/><p>Add</p></button>
                     <button className='bg-blue-600  text-gray-50 font-semibold py-1 px-3 flex items-center space-x-1 rounded-md'><BiSolidShow /><p>Details</p></button>
                </div>
             </div>
          </div>

          <div>
          <img src={p2} alt="" className='object-cover w-full h-[320px] m-auto rounded-t-md'/>
             <div className='py-3 w-full px-3 m-auto bg-gray-50'>
                <h1 className='text-xl text-center font-bold'>Vitamin C</h1>
                <h1 className='text-gray-600'>Supercharged Serum,Smouth and supple skin . </h1>
                <div className='flex justify-between'>
                  <div className='flex justify-center items-center text-lg'>
                     <p className='font-semibold'>Price :</p><p>20,95$</p>
                  </div>
                  <div >
                    <h1 className='flex items-center justify-center space-x-1 bg-slate-400 p-1 rounded-md'><FaStar className='text-yellow-500'/><p className='font-semibold'>5.0</p></h1>
                  </div>
                  
                </div>
                <div className='pt-5 flex justify-end items-center space-x-3'>
                     <button className='bg-red-600 text-gray-50 font-semibold py-1 px-3 flex items-center space-x-1 rounded-md'><IoBagAdd/><p>Add</p></button>
                     <button className='bg-blue-600  text-gray-50 font-semibold py-1 px-3 flex items-center space-x-1 rounded-md'><BiSolidShow /><p>Details</p></button>
                </div>
             </div>
          </div>


          <div>
          <img src={p5} alt="" className='object-cover w-full h-[320px] m-auto rounded-t-md'/>
             <div className='py-3 w-full px-3 m-auto bg-gray-50'>
                <h1 className='text-xl text-center font-bold'>Facial Spritz</h1>
                <h1 className='text-gray-600'>Hydrates ,replenishes ,and moisturizes the skin .</h1>
                <div className='flex justify-between'>
                  <div className='flex justify-center items-center text-lg'>
                     <p className='font-semibold'>Price :</p><p>19,00$</p>
                  </div>
                  <div >
                    <h1 className='flex items-center justify-center space-x-1 bg-slate-400 p-1 rounded-md'><FaStar className='text-yellow-500'/><p className='font-semibold'>4.5</p></h1>
                  </div>
                  
                </div>
                <div className='pt-5 flex justify-end items-center space-x-3'>
                     <button className='bg-red-600 text-gray-50 font-semibold py-1 px-3 flex items-center space-x-1 rounded-md'><IoBagAdd/><p>Add</p></button>
                     <button className='bg-blue-600  text-gray-50 font-semibold py-1 px-3 flex items-center space-x-1 rounded-md'><BiSolidShow /><p>Details</p></button>
                </div>
             </div>
          </div>

          
          <div>
          <img src={p3} alt="" className='object-cover w-full h-[320px] m-auto rounded-t-md'/>
             <div className='py-3 w-full px-3 m-auto bg-gray-50'>
                <h1 className='text-xl text-center font-bold'>Facial Scrub</h1>
                <h1 className='text-gray-600'>Strengthen and exfoliate your skin with Pomegranate.</h1>
                <div className='flex justify-between'>
                  <div className='flex justify-center items-center text-lg'>
                     <p className='font-semibold'>Price :</p><p>24,95$</p>
                  </div>
                  <div >
                    <h1 className='flex items-center justify-center space-x-1 bg-slate-400 p-1 rounded-md'><FaStar className='text-yellow-500'/><p className='font-semibold'>4.5</p></h1>
                  </div>
                  
                </div>
                <div className='pt-5 flex justify-end items-center space-x-3'>
                     <button className='bg-red-600 text-gray-50 font-semibold py-1 px-3 flex items-center space-x-1 rounded-md'><IoBagAdd/><p>Add</p></button>
                     <button className='bg-blue-600  text-gray-50 font-semibold py-1 px-3 flex items-center space-x-1 rounded-md'><BiSolidShow /><p>Details</p></button>
                </div>
             </div>
          </div>

          <div>
          <img src={p7} alt="" className='object-cover w-full h-[320px] m-auto rounded-t-md'/>
             <div className='py-3 w-full px-3 m-auto bg-gray-50'>
                <h1 className='text-xl text-center font-bold'>Pink Clay Mask</h1>
                <h1 className='text-gray-600'>Mask Detoxifies &andgive brightens to your skin .</h1>
                <div className='flex justify-between'>
                  <div className='flex justify-center items-center text-lg'>
                     <p className='font-semibold'>Price :</p><p>18,95$</p>
                  </div>
                  <div >
                    <h1 className='flex items-center justify-center space-x-1 bg-slate-400 p-1 rounded-md'><FaStar className='text-yellow-500'/><p className='font-semibold'>4.5</p></h1>
                  </div>
                  
                </div>
                <div className='pt-5 flex justify-end items-center space-x-3'>
                     <button className='bg-red-600 text-gray-50 font-semibold py-1 px-3 flex items-center space-x-1 rounded-md'><IoBagAdd/><p>Add</p></button>
                     <button className='bg-blue-600  text-gray-50 font-semibold py-1 px-3 flex items-center space-x-1 rounded-md'><BiSolidShow /><p>Details</p></button>
                </div>
             </div>
          </div>

       
      </div>
      </div>
      <div className='flex justify-center items-center'>
        <button className='bg-gray-100 text-2xl font-semibold text-gray-700 px-9 py-3 rounded-sm drop-shadow-lg shadow-red-200'>Show more</button>
      </div>
    </div>
  )
}
