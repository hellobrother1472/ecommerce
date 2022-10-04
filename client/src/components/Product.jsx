import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from '../config/settings';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const Product = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/admin/getAllCategory');

      const data = await response.json();
      setProducts(data.category);
    }
    fetchData();
  }, [])

  return (
    <div className='w-full p-8'>
      {
       products && products.map((product, i) => (
          <div key = {i} className = 'border-dashed border-b-2 border-gray-400 mb-10'>
            <div className='product-heading flex flex-col justify-center items-center'>
              <h1 className='mdm:text-2xl md:text-4xl font-semibold text-royal-blue'>{product.name}</h1>
              <p className='italic text-gray-500'>Details to details is what makes Hexashop different from the other themes.</p>
            </div>
            <div className='item flex h-full items-center justify-center mt-6'>
              <div className='info w-[98%] mb-8'>
                <Slider {...settings}>
                  {
                    product.productIds.map((pdt, i) => (
                      <Link to = {`/product/${pdt._id}`}>
                      <div className='product p-2 flex flex-col md:px-20' key={pdt._id}>
                        <div className='product-image'>
                          <img src={`http://localhost:5000/${pdt.productImage}`} alt='product' className='w-full h-72 md:w-full rounded-md'/>
                        </div>
                        <div className='product-desc pt-6 flex items-center gap-20 smm:gap-10'>
                          <h1 className='text-xl smm:text-sm font-semibold'>{pdt.name}</h1>
                          <p className='flex smm:text-sm'><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> </p>

                        </div>

                        <div className='product-price text-gray-500'>₹{pdt.price}/-</div>
                      </div>
                      </Link>
                    ))
                  }
                </Slider>
              </div>
            </div >
          </div>
       ))
      }
    </div >
  )
}

export default Product