import React from 'react'
import {motion} from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutHero from '../components/AboutHero'
import AboutContent from '../components/AboutContent'


export default function About() {
  return (
    <motion.div className='w-full h-[screen] '
     initial={{
      x : '-100vw',
      opacity:0,
     }}
     animate={{
      x : 0,
      opacity:1,
     }}
     transition={{
      duration:0.3,
     }}
     exit={{
      y : '-100vh'
     }}
    >
       <Header/>
       <AboutHero/>
       <AboutContent/>
       <Footer/>
    </motion.div>
  )
}
