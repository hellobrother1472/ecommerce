import React from 'react';
import arrival from '../images/arrival-bg.webp';
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
                <p className='text-gray-600 text-md'>New season, new arrivals!, we believe our new Collection is your dream come true! Check it out in our store today!</p>
                <AnchorLink href='#allProducts'><button className='transition duration-200 hover:scale-110 bg-red-500 py-3 w-36 text-white rounded-sm'>Shop Now</button></AnchorLink>
            </div>
        </div>
    </div>
  )
}

export default Arrivals