import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import { AnimatePresence } from 'framer-motion'
import Panier from './pages/Panier'

export default function App() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence mode='wait' >
       <Routes location={location} key={location.pathname} >
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Panier' element={<Panier/>}/>
        <Route path='/Login' element={<Login/>}/>
       </Routes>
      </AnimatePresence> 

    </div>
   
  )
}
