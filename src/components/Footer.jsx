import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='flex flex-col space-y-8 md:space-y-15 items-center w-full  bg-gradient-to-b from-pink-200 via-white to-pink-200 pt-10'>
        <div className="w-full flex flex-col space-y-4 justify-center items-center ">
            <h1 className='md:text-3xl text-lg'>Get Exclusive Offers On Your Email</h1>
            <p className='text-sm'>Subscribe to our newstetter and stay updated</p>
            <form action="#" className='flex justify-center items-center space-x-2'>
                <input className='rounded-3xl w-40 p-1.5 ring-1 text-sm ring-gray-500 ' type="email" placeholder="Enter your Email"/>
                <input className='bg-gray-500 w-20 p-1.5 text-sm text-white rounded-3xl ring-1 ring-gray-500 cursor-pointer' type="submit" placeholder='Submit'/>
            </form>
        </div>
     
        <div className="flex flex-col space-y-4">
        <ul className='flex space-x-2.5 font-bold'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/mens">Men</Link></li>
            <li><Link to="/womens">Women</Link></li>
            <li><Link to="/kids">Kids</Link></li> 
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        <ul className='flex space-x-4 items-center justify-center'>
            <FaFacebookF />
            <FaInstagram />
            <IoLogoTwitter />
        </ul>
        </div>


        <div className="w-full flex items-center justify-center bg-gray-800 text-white h-20">
            <p>Copyright @ {new Date().getFullYear()}</p>
        </div>


    </div>
  )
}

export default Footer
