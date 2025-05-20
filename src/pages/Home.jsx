import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import NewCollections from '../details/NewCollections'
import SummerCollections from '../details/SummerCollections'
import Offer from '../details/Offer'


const Home = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center space-y-10 '>
        <div className="flex w-full md:flex-row flex-col h-auto items-center justify-center space-y-4 bg-gradient-to-b from-pink-300 to-white">
      <div className="flex w-full  md:w-[40%]  flex-col   space-y-2 h-[50%] p-2">
        <p>NEW ARRIVALS ONLY</p>
        <h1 className='font-bold text-5xl md:text-7xl'>New <br /> collections <br /> for everyone</h1>
        <Link to="/collection">  <button className='p-1 w-40 items-center ring-pink-900 ring-1 rounded-2xl bg-pink-900 text-white  hover:bg-transparent hover:text-pink-900 cursor-pointer  active:bg-pink-900 active:text-white'>Latest Collections </button>
        </Link>
      </div>
      <div className="flex items-center justify-center w-full h-[40%] md:w-[50%]">
        <img className='w-[55%] ' src="/src/Assets/hero_image.png" alt="" />
      </div>
      </div>
      <NewCollections />
      <Offer />
      <SummerCollections />
      <Footer />
    </div>
  )
}

export default Home
