import React from 'react'
import {Link} from 'react-router-dom'

const SingUp = () => {
  return (
    <div className='w-full flex justify-center items-center h-133 bg-pink-200  shadow-2xl'>
      <div className="flex flex-col pt-4  items-center justify-center md:w-[35%] h-auto w-[95%] bg-white space-y-3 shadow-gray-500 shadow-2xl pb-4">
        <div className="flex flex-col space-y-2">
            <h1 className='text-3xl text-bold text-pink-900'>Sign Up</h1>
            <hr className='w-27 font-bold h-1 rounded bg-pink-900' />
        </div>
        <form className='flex w-full flex-col justify-between items-center space-y-6' action="">
            <input className='ring-1 ring-gray-400 w-[80%] h-9 p-2 focus:outline-none text-sm' type="text" placeholder='Name' />
            <input className='ring-1 ring-gray-400 w-[80%] h-9 p-2 focus:outline-none text-sm' type="email" placeholder='Email' />
            <input className='ring-1 ring-gray-400 w-[80%] h-9 p-2 focus:outline-none text-sm' type="password" placeholder='password'/>
            <button className='bg-pink-900  w-[80%] h-9 p-2 text-white ring-1 ring-pink-900 hover:bg-transparent hover:text-pink-900 active:bg-pink-900 active:text-white cursor-pointer'>Continue</button>
        </form>
          <p className='text-sm'>Already have an account ? <Link to='/login'><span className='text-pink-900'>Click here</span></Link> </p>
          <div className="flex space-x-3 justify-center items-center text-sm w-full ml-3">
            <input type="checkbox" /> <p>by continuing, i agree to the terms of use & privacy policy</p>
          </div>
        
      </div>
    </div>
  )
}

export default SingUp
