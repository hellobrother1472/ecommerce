import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products } from '../data/product';
import { settings } from '../config/settings';

const Product = () => {
  return (
    <div className='w-full p-8'>
      <div className='product-heading flex flex-col justify-center items-center'>
        <h1 className='mdm:text-2xl md:text-4xl font-semibold text-royal-blue'>Men's Latest</h1>
        <p className='italic text-gray-500'>Details to details is what makes Hexashop different from the other themes.</p>
      </div>
      <div className='item flex h-full items-center justify-center mt-6'>
        <div className='info w-[98%]'>
          <Slider {...settings}>
            {
              products.map((product, i) => (
                <div className='product w-1/3 p-8 md:px-20' key={i} >
                  <div className='product-image'>
                    <img src={product.img} alt='product' className='w-full h-72 md:w-72' />
                  </div>
                  <div className='product-desc flex items-center gap-20 smm:gap-10'>
                    <h1 className='text-xl smm:text-sm font-semibold'>{product.h1}</h1>
                    <p className='flex smm:text-sm'><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> </p>

                  </div>

                  <div className='product-price text-gray-500'>{product.price}</div>
                </div>
              ))
            }
          </Slider>
        </div>
      </div >
    </div >
  )
}

export default Product