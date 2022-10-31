import React from 'react'
import { BsFillCartFill } from "react-icons/bs";
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartCount = useSelector((state)=>{return state.cartReducer})
  return (
    <div className='mr-3'>
        <div className='absolute transition duration-200 hover:text-red-600 hover:cursor-pointer hover:scale-110'>
            <BsFillCartFill />
        </div>
        <div className='absolute z-10 bg-red-600 w-4 h-4 text-center rounded-full ml-2 -mt-2 drop-shadow-2xl'>
            <h2 className=' text-xs text-white font-bold'>{cartCount}</h2>
        </div>
    </div>
    
  )
}

export default Cart;