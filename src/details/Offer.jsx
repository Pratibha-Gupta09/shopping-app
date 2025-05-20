import React from 'react'
import { Link } from 'react-router-dom'

const Offer = () => {
  return (
    <div className="flex flex-col w-full md:w-[80%]  md:h-100 bg-pink-200 md:flex-row justify-center items-center space-y-3">
    <div className="flex flex-col space-y-4 w-[90%] md:w-[40%] justify-center items-center ">
    <h1 className='md:text-5xl text-2xl'>Exclusive <br /> Offers For You</h1>
    <p className='text-sm md:text-xl'>ONLY BEST SELERS PRODUCTS</p>
    <Link className='w-35 p-1.5 flex  ring-1 ring-pink-900 justify-center items-center rounded-3xl text-white bg-pink-900 hover:bg-transparent hover:text-pink-900 cursor-pointer  active:bg-pink-900 active:text-white' to="/collection">Check Now</Link>
    </div>
    <div className="flex w-[90%] md:w-[40%] justify-center items-center">
    <img className='w-[70%] ' src="/src/Assets/hero_image.png" alt="" />
    </div>
  </div>
  )
}

export default Offer
