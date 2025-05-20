import React from 'react'
import { Link } from 'react-router-dom'

const HomeItems = (props) => {
  return (

    <>
    <Link to={`/productdetails/${props.id}`}>
     <div className='w-full items-center flex flex-col space-y-1  '>
      <div className="overflow-hidden inline-block">
        <img  className='hover:scale-110 duration-500 transition-transform ' src={props.img} alt="" />
      </div>
      <h3 className='font-bold'>{props.name}</h3>
    </div>
    </Link>
    </>
   
  )
}

export default HomeItems
