import React from 'react'
import popular_collections from '../Assets/popular_product'

import HomeItems from './HomeItems'

function collection(item){
    return (
    <HomeItems
    key={item.id}
    id={item.id}
    name={item.name}
    img={item.image}
    />)
}

const NewCollections = () => {
  return (
    <div className="flex flex-col space-y-3 items-center w-full">
        <h2 className='md:text-4xl text-2xl'>Our New Collection</h2>
        <div className="flex md:flex-row flex-col space-y-5  md:space-x-3 items-center justify-center  w-[80%] ">
            {popular_collections.map(collection)}
        </div>

    </div>
    
  )
}

export default NewCollections
