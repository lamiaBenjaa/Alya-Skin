import React from 'react'
import {motion} from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <motion.div className='w-full h-[100vh]'
     initial={{
      x:'-100vw',
      opacity:0
     }}
     animate={{
      x:0,
      opacity:1
     }}
     transition={{
      duration:0.3,
     }}
     exit={{
      y:'-100vh'
     }}
    >
       <Header/>
       <ContactForm/>
       <Footer/>
    </motion.div>
  )
}
