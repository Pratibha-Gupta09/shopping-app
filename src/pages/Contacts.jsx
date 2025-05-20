import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Contacts = () => {
  return (
    <div className='w-full bg-white flex flex-col space-y-1 md:space-y-3 items-center justify-center pr-2 pl-2'>
      <h1 className='text-5xl font-bold md:pt-5'>Contact</h1>
      <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis officia nemo accusantium exercitationem</p>
      <div className="flex flex-col w-full md:flex-row  md:relative md:w-[90%] md:p-4 items-center">
        <div className="flex w-full  md:w-[60%] bg-pink-200 md:h-95 justify-center items-center p-10">
          <div className="flex w-full md:w-[70%] flex-col justify-center items-center space-y-2 md:space-y-3">
          <h1 className='md:text-4xl text-2xl font-bold'>Get in touch</h1>
            <p className='text-sm text-inherit'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem neque ab aliquam minima nobis tenetur!</p>
            <div className="flex items-center space-x-2 text-sm">
            <FaLocationDot /><p > 123 fifth Avenue, New Tork, NY 10160</p>
            </div>
            <div className="flex items-center space-x-2 text-sm">
            <IoMdMail /> <p>contact@gmail.com</p>
            </div>
            <div className="flex items-center space-x-2 text-sm">
            <FaPhoneAlt /> <p>9-123-123-456</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center md:absolute right-0 shadow-2xl md:w-[45%] w-full bg-white h-80">
            <form action="#" className='w-[90%] grid grid-cols-1 gap-4' >
               <div className="grid grid-cols-2 gap-4">
                <input type="text"  placeholder='First Name' className='focus:outline-none ring-1 px-1 text-sm md:p-2 ring-gray-400'/>
                <input type="text" placeholder='Last Name' className='focus:outline-none ring-1 px-1 text-sm md:p-2 ring-gray-400' />
               </div>
               <input type="email" placeholder='your email address...' className='focus:outline-none ring-1 px-1 text-sm md:md:p-2 ring-gray-400' />
               <textarea rows={4} placeholder='Message' className='focus:outline-none ring-1 px-1 text-sm md:p-2 ring-gray-400'></textarea>
               <input type="submit" value="Send" className='ring-1 ring-pink-900 w-15 bg-pink-900 text-white p-1 text-sm hover:bg-transparent hover:text-pink-900 cursor-pointer' />
            </form>
        </div>

      </div>
    </div>
  )
}

export default Contacts

