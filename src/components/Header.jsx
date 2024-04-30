import React, { useState } from 'react'
import logo from '../images/logo3.png'
import { Link, useLocation } from 'react-router-dom'
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { MdOutlineAddShoppingCart } from "react-icons/md";

export default function Header() {

    const location = useLocation()
    const [menu,setMenu]=useState(true)
    const Menu =()=>{
      menu ? setMenu(false) :setMenu(true)
    }
    const style = 'absolue z-[999999] md:z-auto min-h-screen text-center md:text-start md:flex md:items-center md:justify-center z-[-1] md:z-0 absolute md:static bg-gradient-to-t from-red-100 to-red-300 md:bg-gradient-to-t md:from-white md:to-white w-full md:w-auto mt-3 md:mt-0 left-0 md:space-x-16 lg:space-x-32 py-8 md:py-0  text-xl'
    const style2 ='hidden md:flex md:items-center md:justify-center  md:z-0 md:static md:bg-gradient-to-t md:from-white md:to-white md:w-auto md:mt-0 space-x-6 md:space-x-16 lg:space-x-32  md:space-y-0 md:py-0  text-xl' 
  return (
    <nav className='px-10 py-5 lg:px-24 w-full m-auto shadow-xl md:flex md:justify-between md:items-center'>
      <div className='flex justify-between items-center'>
        <Link to='/'><img className='w-32 lg:w-36' src={logo} alt='logo' /></Link>
        <div className='flex space-x-7'>
         <Link to='/Panier'><p className='flex md:hidden text-center'><MdOutlineAddShoppingCart     className='text-3xl  text-gray-500'/></p></Link>
        <span onClick={()=>Menu()} className='md:hidden cursor-grab'>{menu ? <HiMenuAlt3 className='text-3xl text-red-300' /> : <IoClose className='text-3xl text-red-300' /> }</span>
        </div>
      </div>
      
      <ul className={`${menu ? style2 : style}}`}>
        <div className='md:inline-flex md:space-x-7 lg:space-x-14 mx-8 md:mx-0 space-y-10 ms:space-y-0 md:space-y-0 text-xl py-10 md:py-0'>
         <li><Link to='/' className={`${location.pathname === '/' ? 'text-gray-900 border-b-4 border-gray-800' : 'text-gray-500 hover:text-red-400  hover:border-b-4 border-red-300 duration-200  '}`}>Home</Link></li>
        <li><Link to='/About' className={`${location.pathname === '/About' ? 'text-gray-900 border-b-4 border-gray-800' : 'text-gray-500 hover:text-red-400 hover:border-b-4 border-red-300 duration-200 '}`}>About Us</Link></li>
        <li><Link to='/Contact' className={`${location.pathname === '/Contact' ? 'text-gray-900 border-b-4 border-gray-800' : 'text-gray-500 hover:text-red-400  hover:border-b-4 border-red-300 duration-200 '}`}>Contact</Link></li>
        </div>
        <div className='md:flex justify-between items-center space-x-8 '>
             <Link to='/Panier'><p className='hidden md:flex text-center'><MdOutlineAddShoppingCart     className='text-3xl text-gray-500'/></p></Link>
            <Link to='/Login'><button className='bg-red-300 w-32 ring-2 ring-red-200 py-1 rounded-lg font-semibold text-red-50 text-xl '>Sign Up</button></Link>
        </div>
      </ul>
    </nav>
  )
}
