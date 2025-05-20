import React from 'react'
import {Link} from "react-router-dom"

const Items = (props) => {

   
  return (
    <div  className='md:w-[24%] w-[90%]'>
    <Link to={`/productdetails/${props.id}`}>
    
    <div>
      <div className="overflow-hidden inline-block">
        <img className='hover:scale-110 duration-500 transition-transform ' src={props.img} alt="" />
      </div>
      <div className="flex flex-col space-y-1">
        <h3 className='font-bold'>{props.name}</h3>
        <div className="flex w-[50%] space-x-2">
            <p className='text-sm text-gray-400 line-through'>${props.old_price}</p>
            <p className='text-sm text-pink-900'>${props.new_price}</p>
        </div>
      </div>
    </div>
    </Link>
    </div>
    
  )
}

export default Items
