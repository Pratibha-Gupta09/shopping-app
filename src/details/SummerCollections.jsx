import React from 'react'
import offer from '../Assets/offer'
import HomeItems from './HomeItems'

function collection(item){
    return(
    <HomeItems 
    key={item.id}
    id={item.id}
    name={item.name}
    img={item.image}
    />)
}

const SummerCollections = () => {
  return (
    <div className="flex flex-col space-y-3 items-center w-full">
        <h2 className='md:text-4xl text-2xl'>Summer  Collections</h2>
            <div className=" flex md:flex-row flex-col space-y-5 space-x-3 items-center justify-center  w-[80%] ">
                    {offer.map(collection)}
            </div>
    </div>
  
  )
}

export default SummerCollections