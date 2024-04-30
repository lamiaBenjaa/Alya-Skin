import React from 'react'
import logo from './../images/logo3.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className=''>
        <p className='border-t-2 w-[90%] m-auto py-5'></p>
      <div className='grid md:grid-cols-4 grid-cols-2 space-y-8 md:space-y-0  border-b-2 w-[95%] m-auto pb-5'>
         <div className='text-center space-y-3 '>
            <Link to='/'><img src={logo} alt="" className='w-36 m-auto'/></Link>
            <p className='text-gray-700'>✧ Alya Skin Where Nature Meets Skincare Brilliance ✧</p>
         </div>
         <div className='text-center space-y-3'>
            <Link to='/About'><h1 className='text-xl font-bold'>About</h1></Link>
            <div className='space-y-2'>
              <p>Company</p>
              <p>Community</p>
              <p>Carrers</p>
            </div>
         </div>
         <div className='text-center space-y-3'>
          <Link to='/Contact'><h1 className='text-xl font-bold'>Contact Us</h1></Link>
            <div className='space-y-2 '>
              
               <div class="relative group">
                <p class="">lamiabenlamia528@gm...</p>
                <span class="absolute top-0 left-0 bg-gray-200 text-gray-700 rounded-md p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"> lamiabenlamia528@gmail.com</span>
               </div>

              <p>Morrocco ,Agadir Drarga</p>
              <p>+212 623-229216</p>
            </div>
         </div>
         <div className='text-center space-y-5'>
         <h1 className='text-xl font-bold'>Follow Us</h1>
            <div className=' text-2xl flex items-center justify-center space-x-3'>
              <a href="https://www.instagram.com/lamia.benjaa?igsh=MTA4M3Zza3c4Z3N4dw%3D%3D&utm_source=qr"><p ><FaInstagram /></p></a>
              <a href="https://www.facebook.com/profile.php?id=100076834932808&mibextid=LQQJ4d"><p><FaFacebook  /></p></a>
              <a href="https://github.com/lamiaBenjaa"><p><FaGithub  /></p></a>
            </div>
         </div>
      </div>
        <div className='flex items-center justify-end space-x-1 text-gray-500 py-2 w-[80%] m-auto'><FaRegCopyright /><p>2024 Alya Skin. All right reserved</p></div>
    </div>
  )
}
