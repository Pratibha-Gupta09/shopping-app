import React from 'react'
import women_product from '../Assets/women_product'
import Items from '../details/Items'
import Footer from '../components/Footer'

function createProduct(item){
  return (
    <Items
    key={item.id}
    id={item.id} 
    name={item.name}
    img={item.image}
    old_price={item.old_price}
    new_price={item.new_price}
    />
  )

}

const Womens = () => {
  return (

    <div className="w-full flex flex-col space-y-5 items-center justify-center  mt-3">
       <div className="flex md:w-[80%] w-full items-center bg-gradient-to-l from-pink-300 to-white">
        <div className="flex md:w-[50%] w-full flex-col p-3">
          <h1 className='md:text-7xl text-3xl text-pink-900 '>FLAT 50% OFF</h1>
          <h3 className='md:text-2xl'><span className='text-pink-900'>12 </span> Hours <span className='text-pink-900'>20 </span>min</h3>
        </div>
        </div>
    <div className='w-[80%]  space-y-4 flex flex-wrap justify-around'>
        {women_product.map(createProduct)}
    </div>
    <Footer />
</div>
    
  )
}

export default Womens
