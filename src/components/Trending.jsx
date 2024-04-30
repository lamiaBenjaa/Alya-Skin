import React from "react";
import créme from '../images/Créme.jpg'
import créme2 from '../images/rCréme.jpg'
import mask from '../images/mask.jpg'
import spray from '../images/spray.jpg'
import créme3 from '../images/bMask.jpg'
import mask2 from '../images/allBlue.jpg'
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { RiHeartAddFill } from "react-icons/ri";
import {motion} from 'framer-motion'

export default function Trending(){
    const slideLeft =()=>{
        var slider =document.getElementById('slider')
        slider.scrollLeft =slider.scrollLeft - 500
    }
    const slideRight =()=>{
        var slider =document.getElementById('slider')
        slider.scrollLeft =slider.scrollLeft + 500
    }

    return(
        <div className="w-full pt-10">
           <div className="w-[90%] m-auto flex justify-between items-center space-x-8">
              <div className="">
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
                 className="text-6xl font-bold text-gray-900 py-3">Popular Products</motion.h1>
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
                 className="text-gray-900 text-lg">"Skin-loving Must-Haves!"</motion.p>  
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
              className="m-auto max-w-[800px] text-center text-lg">
              "Elevate your skincare routine with our curated selection of premium products
               designed to nourish, revitalize, and rejuvenate your skin.
                Explore our extensive range of popular skincare essentials.
              </motion.div>
           </div>
           <div
           className='w-full h-full px-10 py-12 flex items-center relative'>
           <FaChevronLeft className="text-xl cursor-grab text-gray-700 hover:text-gray-900 hover:scale-150 duration-500" onClick={slideLeft}/>
              <div id='slider' className=" w-full p-6 m-auto h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide space-x-3 ">

                 <motion.div
                  whileHover={{
                    scale:1.1
                  }}
                  transition={{
                    duration:0.7
                  }}
                 className="inline-block relative p-2 cursor-pointer shadow-lg shadow-red-200">
                     <img src={créme} alt="product" className=" object-cover w-[345px] h-[250px] rounded-xl"/>
                     <p className="absolute inset-0 flex justify-end p-7 text-4xl"><RiHeartAddFill className=" text-gray-100 hover:text-red-600 opacity-90"/></p>
                     <div className="flex justify-between items-center pt-6 px-2">
                       <div>
                          <h1 className="text-xl font-bold">Berries Moisturiser</h1>
                          <p >restructure and repair your skin</p>
                       </div>
                       <div>
                        <p className="text-xl font-bold">24.95$</p>
                       </div>
                     </div>
                 </motion.div>
                 <motion.div
                    whileHover={{
                       scale:1.1
                    }}
                    transition={{
                       duration:0.7
                    }}
                 className="inline-block relative p-2 cursor-pointer shadow-lg shadow-red-200">
                     <img src={spray} alt="product" className="object-cover w-[345px] h-[250px] rounded-xl"/>
                     <p className="absolute inset-0 flex justify-end p-7 text-4xl"><RiHeartAddFill className=" text-gray-100 hover:text-red-600 opacity-90"/></p>
                     <div className="flex justify-between items-center pt-6 px-2">
                       <div>
                          <h1 className="text-xl font-bold">Micellar Cleanser</h1>
                          <p >hydrate and cleanse your skin</p>
                       </div>
                       <div>
                        <p className="text-xl font-bold">19.95$</p>
                       </div>
                     </div>
                 </motion.div>

                 <motion.div
                   whileHover={{
                    scale:1.1
                   }}
                   transition={{
                    duration:0.7
                   }}
                 className="inline-block relative p-2 cursor-pointer shadow-lg shadow-red-200">
                     <img src={mask} alt="product" className="object-cover w-[345px] h-[250px] rounded-xl"/>
                     <p className="absolute inset-0 flex justify-end p-7 text-4xl "><RiHeartAddFill className=" text-gray-100 hover:text-red-600 opacity-90"/></p>
                     <div className="flex justify-between items-center pt-6 px-2">
                       <div>
                          <h1 className="text-xl font-bold">Clay Mask</h1>
                          <p >Detoxifies and brightens your skin</p>
                       </div>
                       <div>
                        <p className="text-xl font-bold">21.95$</p>
                       </div>
                     </div>
                 </motion.div>

                 <motion.div
                   whileHover={{
                    scale:1.1
                   }}
                   transition={{
                    duration:0.7
                   }}
                 className="inline-block relative p-2 cursor-pointer shadow-lg shadow-red-200">
                    <img src={créme2} alt="product" className="object-cover w-[345px] h-[250px] rounded-xl"/>
                    <p className="absolute inset-0 flex justify-end p-7 text-4xl "><RiHeartAddFill className=" text-gray-100 hover:text-red-600 opacity-90"/></p>
                    <div className="flex justify-between items-center pt-6 px-2">
                       <div>
                          <h1 className="text-xl font-bold">Exfoliator Scrub</h1>
                          <p >Strengthen your skin & vitamin C</p>
                       </div>
                       <div>
                        <p className="text-xl font-bold">20.95$</p>
                       </div>
                     </div>
                 </motion.div>

                 <motion.div
                   whileHover={{
                    scale:1.1
                   }}
                   transition={{
                    duration:0.7
                   }}
                 className="inline-block relative p-2 cursor-pointer shadow-lg shadow-red-200">
                    <img src={créme3} alt="product" className="object-cover w-[345px] h-[250px] rounded-xl"/>
                    <p className="absolute inset-0 flex justify-end p-7 text-4xl "><RiHeartAddFill className=" text-gray-100 hover:text-red-600 opacity-90"/></p>
                    <div className="flex justify-between items-center pt-6 px-2">
                       <div>
                          <h1 className="text-xl font-bold">Serum Vitamin C</h1>
                          <p >smooth and supple skin</p>
                       </div>
                       <div>
                        <p className="text-xl font-bold">19.95$</p>
                       </div>
                     </div>
                 </motion.div>
                 <motion.div
                   whileHover={{
                    scale:1.1
                   }}
                   transition={{
                    duration:0.7
                   }}
                 className="inline-block relative p-2 cursor-pointer shadow-lg shadow-red-200">
                    <img src={mask2} alt="product" className="object-cover w-[345px] h-[250px] rounded-xl"/>
                    <p className="absolute inset-0 flex justify-end p-7 text-4xl"><RiHeartAddFill className=" text-gray-100 hover:text-red-600 opacity-90"/></p>
                    <div className="flex justify-between items-center pt-6 px-2">
                       <div>
                          <h1 className="text-xl font-bold">Collagen Mask</h1>
                          <p >Plumps your skin intense</p>
                       </div>
                       <div>
                        <p className="text-xl font-bold">24.95$</p>
                       </div>
                     </div>
                 </motion.div>
              </div>
              <FaChevronRight className="text-xl cursor-grab text-gray-700 hover:text-gray-900 hover:scale-150 duration-500 " onClick={slideRight}/>
           </div>
        </div>
    )
}