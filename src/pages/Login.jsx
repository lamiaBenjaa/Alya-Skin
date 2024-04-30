import React from 'react'
import img from './../images/cover.jpg'


export default function Login() {
  return (
    <div className='md:h-[100vh] bg-red-100 md:grid grid-cols-12' >
       <div className='relative col-span-5'>
         <img src={img} alt="" className='md:h-full h-60 w-full object-cover rounded-b-[50px] md:rounded-b-0 md:rounded-r-[50px] shadow-2xl'/>
       </div>
       <div className='col-span-7 rounded-tl-3xl w-[80%] m-auto py-10 md:py-0'>
            <div className='space-y-8'>
            <div className='text-center space-y-5'>
                <h1 className='text-5xl font-extrabold'>Sign Up</h1>
                <p className='text-lg'>Welcome back to Alya Skin!</p>
            </div>
            <div className='space-y-2'>
                <label htmlFor="" className='block text-lg font-semibold text-gray-900'>UserName :</label>
                <input type="text" name="name" placeholder='Enter Your Name ....' className='w-full py-2 px-2 rounded-md opacity-60 border-2 border-red-300'/>
            </div>
            <div className='space-y-2'>
                <label htmlFor="" className='block text-lg font-semibold text-gray-900'>Password :</label>
                <input type="text" name="password" placeholder='Password ...'  className='w-full py-2 px-2 rounded-md opacity-60 border-2 border-red-300'/>
            </div>
            <div className='flex space-x-2'>
                <input type="checkbox" className='w-4'/> <p className='font-semibold text-gray-900'>stay signed In</p>
            </div>
            <p></p>
            <div className='space-y-1'>
                <button type='submit' className='text-center w-full bg-red-50 py-2 rounded-md text-lg font-semibold text-red-300 border-2 border-red-300 bg-opacity-60'>Sign Up</button>
                <p className='text-center text-gray-500'>or</p>
                <button type='submit' className='text-center w-full bg-red-300 py-2 rounded-md text-lg font-semibold text-gray-50'>Login</button>
            </div>

            <p className='text-gray-500 text-center'>Forgot Password ?</p>
            </div>
       </div>
    </div>
  )
}
// style={{backgroundImage:`url(${img})`}}