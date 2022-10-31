import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { information } from '../data/carousel';
import { useState, useRef } from 'react';
import shortid from 'shortid';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Carousel = () => {
    const [data, setData] = useState(0);
    const ref = useRef();
    
    const handleLeft = () => {
        setData(Math.abs((data - 1) % information.length));        
    }

    const handleRight = () => {
        setData((data + 1) % information.length);
    }

    

    return (
        <div id = 'carousel' className='bg-gray-200 h-[91vh] w-full overflow-hidden mdm:p-4 md:p-6 '>
            <div className='item flex h-full items-center justify-center smm:gap-4 sm:gap-6 md:gap-8'>
                <div onClick={() => handleLeft()} className='transition duration-200 w-0.5/6 arrow-left smm:p-1 md:p-2 cursor-pointer flex justify-center items-center smm:h-5 smm:w-5 sm:h-10 sm:w-10 bg-black text-white rounded-full smm:text-sm md:text-2xl hover:scale-110'>&lt;</div>
                <div ref={ref} className='info flex flex-col gap-4 smm:w-4/6 sm:w-3/6 animate-fade-in' key = {shortid.generate()}>
                    <h2 className='text-red-600 uppercase font-bold'>{information[data].h2}</h2>
                    <h1 className='smm:text-2xl md:text-4xl font-semibold'>{information[data].h1}</h1>
                    <p className='text-gray-600 smm:text-sm'>{information[data].para}</p>
                    <AnchorLink href='#allProducts'><div className='transition duration-200 btn flex gap-4 bg-black text-white py-3 w-36 justify-center items-center hover:scale-110'>
                    <button className='font-semibold'>  Shop Now</button>
                        <BsArrowRight className='font-semibold' />
                    </div></AnchorLink>
                </div>
                <div className='item-img flex justify-center smm:hidden sm:block md:w-2/6 animate-fade-out' key={shortid.generate()}>
                    <img className='px-4 h-100' src={information[data].image} alt='product' />
                </div>
                <div onClick={() => handleRight()} className='transition duration-200 w-0.5/6 arrow-right smm:p-1 md:p-2 cursor-pointer smm:h-5 smm:w-5 sm:h-10 sm:w-10 flex justify-center items-center bg-black text-white rounded-full smm:text-sm md:text-2xl hover:scale-110'>&gt;</div>
            </div>
        </div>
    )
}

export default Carousel