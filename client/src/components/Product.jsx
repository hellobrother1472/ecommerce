import React, { lazy } from 'react';
import { AiFillStar } from 'react-icons/ai';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from '../config/settings';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useRef } from 'react';
import SkeletonLoading from './SkeletonLoading';

const Product = ({setProgress}) => {
  const [products, setProducts] = useState();
  const refImage = useRef();
  const ref = useRef();

  useEffect(() => {
    const fetchData = async () => {
      setProgress(10);
      const response = await fetch('http://localhost:5000/admin/getAllCategory');
      setProgress(40);
      const data = await response.json();
      setProgress(70);
      setProducts(data.category);
      setProgress(100);
    }
    fetchData();
  }, [])

  return (
    <div className='w-full p-8' id='allProducts'>
      {
       products ? products.map((product, i) => (
          <div key = {i} className = {(i === products.length-1) ? '':'border-dashed border-b-2 border-gray-400 mb-10'}>
            <div className='product-heading flex flex-col justify-center items-center'>
              <h1 className='mdm:text-2xl md:text-4xl font-semibold text-royal-blue'>{product.name}</h1>
              <hr className='border-black'/>
            </div>
            <div className='item flex h-full items-center justify-center mt-6'>
              <div className='info w-[98%] mb-8'>
                <Slider {...settings}>
                  {
                    product.productIds.map((pdt, i) => (
                      <Link key={pdt._id} to = {`/product/${pdt._id}`}>
                      <div className='product p-2 flex flex-col md:px-20' key={pdt._id}>
                        <div className='product-image relative' >
                          <img ref = {refImage}  loading='lazy' src={pdt.productImage} alt='product' className='w-full h-72 rounded-md' />
                          {/* <div ref = {ref} className='h-72 w-full flex flex-col gap-4 justify-center items-center absolute top-0 bg-transparent rounded-md'>
                            <button className='addCart border-2 w-36 border-red-500 rounded-full px-4 py-2 text-xl text-white bg-red-500 smm:text-sm hover:bg-transparent hover:text-red-500'>Add to Cart</button>
                            <button className='buyNow border-2 w-36 border-black rounded-full px-4 py-2 text-xl text-white bg-black smm:text-sm hover:bg-transparent hover:text-black'>Buy Now</button>
                          </div> */}
                        </div>
                        <div className='product-desc pt-6 flex items-center gap-20 smm:gap-10'>
                          <h1 className='text-xl smm:text-sm font-semibold'>{pdt.name}</h1>
                          <p className='flex smm:text-sm'><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> </p>

                        </div>

                        <div className='product-price text-gray-500'>₹{pdt.discountedPrice}/-</div>
                      </div>
                      </Link>
                    ))
                  }
                </Slider>
              </div>
            </div >
          </div>
       )) : <SkeletonLoading/>
      }
    </div >
  )
}

export default Product