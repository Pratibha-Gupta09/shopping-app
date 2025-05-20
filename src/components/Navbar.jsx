
import { FaBars } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { GrCart } from "react-icons/gr";
import { GiShoppingBag } from "react-icons/gi";
import { useLocation } from 'react-router-dom';



const Navbar = ({itemQuantity}) => {
    const location = useLocation();
    const currentPath = location.pathname;


  return (
    <div className='flex justify-between w-full bg-white items-center h-13'>
      <div className='md:w-[10%] w-[30%] flex items-center justify-center space-x-2'>
         <GiShoppingBag  className='text-pink-900 text-2xl'/>
        <h1 className='font-bold text-pink-900 font-[Sacramento]'>Shop</h1>
      
      </div>
   
     <ul className='md:flex items-center justify-center space-x-2.5  font-bold  hidden w-[50%] relative'>
        <li  className='flex flex-col items-center justify-center space-y-1.5 w-[10%]'>
          <Link to='/'>Home</Link>
          {currentPath === "/" &&  <hr className='border-none h-0.5 rounded-2xl w-10 bg-pink-900'/>}

        </li>
        <li  className='flex flex-col items-center justify-center  space-y-1.5 w-[10%]'>
          <Link to='/womens'>Womens</Link> 
            {currentPath === "/womens" &&  <hr className='border-none h-0.5 rounded-2xl w-10 bg-pink-900'/>}
          </li>
        <li  className='flex flex-col items-center justify-center  space-y-1.5 w-[10%]'>
          <Link to='/mens'>Mens</Link>
              {currentPath === "/mens" &&  <hr className='border-none h-0.5 rounded-2xl w-10 bg-pink-900'/>}
           </li>
        <li  className='flex flex-col items-center justify-center  space-y-1.5 w-[10%]'>
          <Link to='/kids'>Kids</Link>
              {currentPath === "/kids" &&  <hr className='border-none h-0.5 rounded-2xl w-10 bg-pink-900'/>}
        </li>
        <li className='flex flex-col items-center justify-center  space-y-1.5 w-[10%]' >
          <Link to='/contact'>Contacts</Link>
            {currentPath === "/contact" &&  <hr className='border-none h-0.5 rounded-2xl w-10 bg-pink-900'/>}
          </li>
        
     </ul>
      <div className="flex justify-center items-center space-x-6 w-[15%] ">
        <div className="flex relative">
                <Link to="/cart">< GrCart className='text-2xl text-pink-900 ' /></Link>
                <div className="flex w-3.5 h-3.5 rounded-2xl bg-pink-900 text-white items-center justify-center text-sm absolute left-5 bottom-4">{itemQuantity}</div>
        </div>
          
          <Link to="/login"><span className='bg-pink-900 list-none md:flex hidden justify-center ring-1 ring-pink-900   items-center  text-white mr-2 rounded-2xl w-20 hover:bg-transparent hover:text-pink-900 cursor-pointer  active:bg-pink-900 active:text-white '>Login</span></Link>
         

      </div>
    
    </div>
  )
}

export default Navbar
