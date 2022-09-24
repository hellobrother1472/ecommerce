import React from 'react';
import {BsTruck} from 'react-icons/bs';
import {GiRibbonMedal} from 'react-icons/gi';
import {TbDiscount} from 'react-icons/tb';

const ShopUs = () => {
    return (
        <div className='w-full'>
            <div className='main-content mx-auto p-6 pb-2'>
                <h1 className='main-heading text-center mb-1 md:mb-3 mdm:text-2xl md:text-5xl font-semibold'>Why Shop With Us</h1>
                <div className='border-b-4 border-red-500 w-16 mx-auto mt-8'></div>
            </div>
            <div className='content flex flex-wrap justify-center items-center gap-8 text-center mt-4 mb-8 p-4'>
                <div className='w-full md:w-1/4 box bg-royal-blue text-white px-11 py-12 flex flex-col items-center rounded-md gap-2'>
                    <BsTruck className='text-5xl' />
                    <h2 className='font-semibold text-2xl'>Fast Delivery</h2>
                    <p>variations of passages of Lorem Ipsum available</p>
                </div>
                <div className='w-full md:w-1/4 box bg-royal-blue text-white px-11 py-12 flex flex-col items-center rounded-md gap-2'>
                    <TbDiscount className='text-5xl' />
                    <h2 className='font-semibold text-2xl'>Free Shipping</h2>
                    <p>variations of passages of Lorem Ipsum available</p>
                </div>
                <div className='w-full md:w-1/4 box bg-royal-blue text-white px-11 py-12 flex flex-col items-center rounded-md gap-2'>
                    <GiRibbonMedal className='text-5xl' />
                    <h2 className='font-semibold text-2xl'>Best Quality</h2>
                    <p>variations of passages of Lorem Ipsum available</p>
                </div>
            </div>
        </div>
    )
}

export default ShopUs