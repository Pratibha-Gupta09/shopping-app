import React from 'react'
import { MdOutlineStar } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";
import {  useParams } from "react-router-dom"
import all_products from '../Assets/all_products'
import { useNavigate } from 'react-router-dom';

const ProductDetails = ({addToCart}) => {
  const {productId} = useParams();
  const product = all_products.find(item => item.id === parseInt(productId));

  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/cart');

}
  return (
     <div key={product.id} className='w-full md:h-133 h-auto flex flex-col space-y-5 justify-center items-center pt-3 '>
      <div className="flex flex-col md:flex-row space-y-5 w-[80%] justify-center items-center pb-3">
        <div className="flex w-full md:w-[50%] justify-center">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="flex w-full md:w-[50%] flex-col space-y-4 ">
              <h1 className='text-2xl font-bold'>{product.name}</h1>
              <p className='text-pink-900 flex items-center'>
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdStarBorder />
                (1234)
              </p>
              <div className="flex space-x-4">
                <p className='text-sm text-gray-400 line-through'>${product.old_price}</p>
                <p className='text-sm text-pink-900'>${product.new_price}</p>
              </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, nesciunt? Fugit temporibus perferendis quos beatae cumque error unde nostrum praesentium!</p>
              <div className="flex flex-col space-y-3">
                <h3 className='text-xl font-bold'>Select Size</h3>
               <div className="flex space-x-4">
              {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                <button
                  key={size}
                  className='w-8 h-6 shadow-2xl bg-white font-bold cursor-pointer hover:bg-pink-100'
                >
                  {size}
                </button>
              ))}
            </div>
            </div>
            
            <button
              onClick={handleAddToCart}
                className='md:w-30 w-full h-8 ring-1 ring-pink-900 text-white text-sm font-bold bg-pink-900 hover:bg-transparent hover:text-pink-900 cursor-pointer'
              > Add To Cart</button>
            
              
          </div>
      </div>
      
    </div>
  )
}

export default ProductDetails
