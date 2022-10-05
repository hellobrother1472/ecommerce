import React from 'react';
import arrival from '../images/arrival-bg.png';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Arrivals = () => {
  return (
    <div className='w-full bg-gray-200'>
        <div className='main-arrival flex flex-wrap justify-center items-center gap-20'>
            <div className='md:w-1/3 person-image hidden md:block mt-5'>
                <img src = {arrival} alt='person' className='h-[50vh] mx-auto'/>
            </div>
            <div className='md:w-1/2 content flex flex-col gap-8 items-center md:items-start p-6'>
                <h1 className='font-semibold text-2xl md:text-5xl text-royal-blue'>#New Arrivals</h1>
                <p className='text-gray-600 text-md'>Vitae fugiat laboriosam officia perferendis provident aliquid voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic? Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique ex unde!</p>
                <AnchorLink href='#allProducts'><button className='transition duration-200 hover:scale-110 bg-red-500 py-3 w-36 text-white rounded-sm'>Shop Now</button></AnchorLink>
            </div>
        </div>
    </div>
  )
}

export default Arrivals