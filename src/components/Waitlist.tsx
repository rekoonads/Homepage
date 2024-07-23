'use client';

import { BackgroundBeams } from './ui/background-beams';
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";


export function BackgroundBeamsDemo() {
  
  return (
    <div className="h-[42rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="md:flex w-full text-center p-8 items-center justify-center ">      
        <div className=' flex flex-col justify-center  gap-1 max-w-[20rem]  leading-tight mx-auto mb-10'>
        <h2 className='sm:text-[2rem] md:text-[2rem] font-[500] '>Lemonade Digital Media Technology Private Limited</h2>
        <p> Where the connection flourish, dreams find a home and possibilities become a reality</p>
        <div className="flex gap-2 justify-center text-[25px] mt-2 cursor-pointer">
          <button><SiGmail/></button>
          <button><FaLinkedin/></button>
          <button><FaInstagram/></button>
          <button><RiTwitterLine/></button> 
          <button><FaFacebook/></button>
        </div>
      </div>
      
      <div className="max-w-2xl mx-auto mt-2 p-4 ">
        <h1 className="relative z-10 text-lg md:text-7xl leading-snug  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-6 text-sm text-center relative z-10">
          Welcome to Lemonade Digital Media Technology, Private Limited, the best transactional email service on the web.
          We provide reliable, scalable, and customizable email solutions for
          your business. Whether you&apos;re sending order confirmations,
          password reset emails, or promotional campaigns, Rekoon has got you
          covered.
        </p>
        {/* <input
          type="text"
          placeholder="hi@manuarora.in"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 p-4  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-700-white"
        /> */}
        <div className="flex justify-between max-w-full m-2 p-2 rounded-lg border border-neutral-800 mt-5">
          <input type="text" className=' w-full relative z-10 text-[19px]  bg-neutral-950 placeholder:text-700-white outline-none placeholder:font-[400]' placeholder='hi@manuarora.in'/>
          <button className='p-1 border rounded-lg bg-teal-950'>Subscribe</button>
        </div>
        
      </div>
         <div className="flex sm:flex-row md:flex-col gap-3 justify-between mt-4 md:max-w-[20rem] leading-tight">
           <div className='flex flex-col'>
              <h2 className='font-[500] text-[16px] md:text-[32px]'>Lemonade Digital Media Technology</h2>
             
              <p className='text-[12px] md:text-[20px] md:mt-4'>Address goes here!!</p>
           </div>
           <div className='flex flex-col md:mt-4'>
              <h2 className='font-[500] text-[16px] md:text-[32px]'>Contact Us</h2>
              <p className='text-[12px] md:text-[20px] md:mt-4'>mobile number goes here!</p>
           </div>
         </div>
      </div>
      <div className="w-full md:flex items-center gap-1 text-center justify-center text-[#aea1a1] absolute bottom-0 ">
          <p className='md:mr-[40rem]' >&#169;Lemonade Digital Media Technology, Private Limited. all rights reserved</p>
          <div className='flex gap-4 text-center justify-center'>
            <p>privacy policy</p>
            <p>terms and condiions</p>
            <p>refund policy</p>
          </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
