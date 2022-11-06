import React, {useState} from 'react';
import { testimonials } from '../data/testimonial';
import shortid from 'shortid';

const Offer = () => {
  const [idx, setIdx] = useState(0);
  const [clickBtn, setClickBtn] = useState('right');

  const handleLeft = () => {
    setClickBtn('left');
    setIdx(Math.abs((idx - 1 + testimonials.length)%testimonials.length));
  }

  const handleRight = () => {
    setClickBtn('right');
    setIdx(Math.abs(idx + 1)%testimonials.length);
  }

  return (
    <div id = "testimonial" className='w-full bg-gray-200 flex flex-col gap-6 justify-center items-center p-6 overflow-hidden'>
        <div className='testimonial-heading'>
          <h1 className='heading-offer mdm:text-2xl md:text-4xl font-semibold text-royal-blue'>Customer's Testimonial</h1>
          <p className='border-b-4 border-red-500 w-20 mx-auto mt-2'></p>
        </div>
        <div className='content flex justify-between items-center smm:gap-2 sm:gap-4 md:gap-6 w-3/5 smm:w-full'>
          <div onClick={handleLeft} className='transition duration-200 w-16 arrow-left smm:p-1 md:p-2 cursor-pointer flex justify-center items-center smm:h-5 smm:w-5 sm:h-10 sm:w-10 bg-black text-white rounded-full smm:text-sm md:text-2xl hover:scale-110'>&lt;</div>
          <div className={(clickBtn === 'right' ? 'customer-detail flex flex-col justify-center items-center smm:w-2/3 w-3/5 animate-fade-out': 'customer-detail flex flex-col justify-center items-center smm:w-2/3 w-3/5 animate-fade-in')} key={shortid.generate()}>
            <img className='customer-img h-36 w-36 rounded-full mdm:h-28 mdm:w-28' alt='avatar' src = {testimonials[idx].img} />
            <div className='name text-xl font-semibold mt-2'>{testimonials[idx].name}</div>
            <div className='customer text-gray-500'>{testimonials[idx].designation}</div>
            <div className='customer-review text-center mt-4'>{testimonials[idx].review}</div>
          </div>
          <div onClick={handleRight} className='transition duration-200 w-16 arrow-left smm:p-1 md:p-2 cursor-pointer flex justify-center items-center smm:h-5 smm:w-5 sm:h-10 sm:w-10 bg-black text-white rounded-full smm:text-sm md:text-2xl hover:scale-110'>&gt;</div>
        </div>
    </div>
  )
}

export default Offer