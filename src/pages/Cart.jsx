import React from 'react'
import { MdOutlineStar } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Cart = ({items, removeFromCart, clearCart, itemQuantity}) => {
  const total = items.reduce((sum, item) => sum +  item.old_price * item.quantity, 0)
 
  const discount = (total * 20) / 100;

  return (

    
    <div className='flex flex-col w-full bg-white '>
      <h1 className='font-bold text-2xl md:pl-8'>My Cart</h1>

      {items.length === 0 ? (   <div className="text-center py-10 text-gray-600 text-lg font-semibold">
        Your cart is empty 🛒
      </div>) : (
             <div className='w-full flex md:flex-row flex-col space-y-3 justify-around mt-3'>

      <div className="md:w-[60%] w-full flex flex-col items-center space-y-2 ">
        {
          items.map((item, index) => {
            return(
               <div key={index} className="flex flex-row items-center justify-around shadow shadow-gray-500 w-full h-28 md:h-33">
          <div className=" flex md:w-[15%] w-[30%] justify-center items-center h-full overflow-hidden"><img className=' w-[75%]' src={item.image} alt=""/></div>
          <div className="flex flex-col w-[70%] space-y-1 justify-center h-full md:p-2 p-2">
            <div className="flex items-center justify-between w-full">
                  <h2 className='font-bold text-lg'>{item.name}</h2>
                  <button className='bg-pink-900 ring-pink-900 ring-1 text-sm text-white rounded-2xl h-5 w-14 md:w-18 items-center hover:bg-transparent hover:text-pink-900 cursor-pointer  active:bg-pink-900 active:text-white ' onClick={() => removeFromCart(item.id)}> remove</button>
            </div>
          
           <p className='text-pink-900 flex items-center text-sm'>
                           <MdOutlineStar />
                           <MdOutlineStar  />
                           <MdOutlineStar />
                           <MdOutlineStar />
                           <MdStarBorder />
                           (1234)
                         </p>
            <ul className='flex items-center justify-between w-full '>
              <li className='flex flex-row space-x-2 text-sm' ><p className='text-gray-400 line-through'>${item.old_price}</p> <p className=' text-pink-900'>${item.new_price}</p></li>
              <li className='flex items-center justify-center h-4 w-7 shadow'>{item.quantity}</li>
            </ul>
            <ul className='flex space-x-2 text-sm'>
              <li className=' text-gray-800'>Subtotal</li>
              <li className=' text-pink-900'>${item.new_price * item.quantity}</li>
            </ul>
          </div>
        </div>
            )
          })
          }
      </div>


       <div className="md:w-[30%] w-full flex flex-col items-center space-y-4 h-65 shadow shadow-gray-500">
        <div  className='flex font-bold text-gray-700 text-2xl shadow w-full h-10 justify-center items-center'>
             <h2>Price Details</h2>
        </div>
        <ul className='w-[90%] space-y-1'>
            <li className='flex justify-between'><p>Price ({itemQuantity})</p> <p className='text-pink-900'>$ {total}</p></li>
              <li className='flex justify-between'><p>Coupon Card</p> <p  className='text-pink-900 text-sm '>FIRST20OFF</p></li>
            <li className='flex justify-between'><p>Discount</p> <p className='text-green-600 '>-$ {discount}</p></li>
            <li className='flex justify-between'><p>Delivery charges</p> <p  className='text-green-600 '>Free</p></li>
             <li className='flex justify-between font-bold text-xl'><h2>Total Amount</h2> <p className='text-pink-900'>$ {total - discount}</p></li>
            
        </ul>
        <div className="flex justify-around w-full">
               <button
                  onClick={clearCart}
                      className='p-1 h-8 ring-1  rounded-2xl w-[40%] ring-pink-900 text-white text-sm font-bold bg-pink-900 hover:bg-transparent hover:text-pink-900 cursor-pointer active:bg-pink-900 active:text-white'><span>Clear Cart</span>
                </button>
                <button
                      className='p-1 h-8 ring-1 rounded-2xl w-[40%] ring-pink-900 text-white text-sm font-bold bg-pink-900 hover:bg-transparent hover:text-pink-900 cursor-pointer active:bg-pink-900 active:text-white'> <span>Place Order</span>
                </button>
        </div>
      
    </div>
   
      </div>
      )}
   
      </div>
  )
}

export default Cart
