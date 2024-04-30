import React from 'react'
import Hero from '../components/Hero'
import Trending from '../components/Trending'
import {motion} from 'framer-motion'
import Coverture from '../components/Coverture'
import Products from '../components/Products'
import Header from '../components/Header'
import Icons from '../components/Icons'
import Footer from '../components/Footer'
import Sales from '../components/Sales'

export default function Home() {
  return (
    <motion.div 
      initial={{
        y:'100vw',
        opacity:0,
      }}
      animate={{
        y:0,
        opacity:1,
      }}
      transition={{
        duration:0.3
      }}
      exit={{
        y:'-100vh'
      }}
    >
       <Header/>
      <Hero />
      <Trending/>
      <Coverture/>
      <Products/>
      <Sales/>
      <Icons/>
      <Footer/>
    </motion.div>
  )
}
