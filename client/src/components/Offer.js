import React from 'react'

const Offer = () => {
  return (
    <div className='w-full bg-gray-200 flex flex-col gap-7 justify-center items-center p-8'>
        <h1 className='heading-offer mdm:text-2xl md:text-4xl font-semibold text-royal-blue'>Subscribe To Get Discount Offers</h1>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        <input type = 'text' placeholder='Enter Your Email' className='w-full md:w-[48vw] p-4 rounded-full focus:outline-none placeholder:text-md placeholder:text-gray-600'/>
        <button className='transition duration-200 hover:scale-110 bg-red-500 py-3 w-48 text-white rounded-full'>SUBSCRIBE</button>
    </div>
  )
}

export default Offer