
import img from './../images/bg2.jpg'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_oorv96g', 'template_l0utnob', form.current, {
          publicKey: 'VWHCLtst9zKWV7GJ4',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  return (
    <div className=' bg-cover bg-no-repeat py-20' style={{backgroundImage:`url(${img})`}}>
        <div className='lg:w-[50%] md:w-[70%] w-[80%] m-auto bg-gray-600 border-2 border-gray-300 bg-opacity-10 rounded-xl px-5 md:px-8 py-16 space-y-8 shadow-2xl'>
            <div className='text-center'>
                <h1 className='text-5xl font-extrabold'>Contact Us</h1>
                <p>Fill out the form and we'll be in touch!</p>
            </div>
            
            <form ref={form} onSubmit={sendEmail}>
            <div className='space-y-8'>
            <div className='space-y-2'>
                <label htmlFor="" className='block text-lg font-semibold'>Name Complet :</label>
                <input type="text" name="name" placeholder='Enter Your Name ....' className='w-full py-2 px-2 rounded-md opacity-60'/>
            </div>
            <div className='space-y-2'>
                <label htmlFor="" className='block text-lg font-semibold'>Your Email :</label>
                <input type="email" name="email" placeholder='name@exemple.com ....' className='w-full py-2 px-2 rounded-md opacity-60'/>
            </div>
            <div className='space-y-2'>
                <label htmlFor="" className='block text-lg font-semibold'>Your Message :</label>
                <textarea name="message" placeholder='Let us khow how we could help you !' className='w-full py-2 px-2 rounded-md opacity-60'></textarea>
            </div>
            <div>
                <button type='submit' className='text-center w-full bg-red-300 py-2 rounded-sm text-lg font-semibold text-gray-50'>Send message</button>
            </div>
            </div>
            </form>
           
        </div>
    </div>
  )
}
