import React, { useState } from 'react';
import { useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useParams, Link } from 'react-router-dom';

const ProductCategory = () => {
    let { id } = useParams();

    const [products, setProducts] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/admin/getAllProductsByCategory/${id}`);
            const data = await response.json();
            setProducts(data.productList);
        }

        fetchData();
    }, [id])

    return (
        <div className='flex flex-col justify-center items-center p-6 md:p-8 bg-gray-200'>
            <div className='heading'>
                <h1 className='text-3xl mdm:text-2xl text-royal-blue'>Shirts</h1>
                <p className='border-b-4 border-red-500 w-10 mx-auto mt-1'></p>
            </div>
            <div className='products flex flex-wrap justify-center items-center mt-4'>
                {
                    products && products.map((product) => (
                        <Link to = {`/product/${product._id}`}>
                        <div className='product bg-white flex flex-col justify-center items-center p-2 mx-6 my-4 cursor-pointer relative hover:scale-110 hover:shadow-2xl duration-200' key={product._id}>
                            <h4 className='flex justify-center items-center text-white bg-red-500 px-1 text-sm rounded-md gap-1 absolute top-2 right-2'>4.5 <AiFillStar /></h4>
                            <div className='image bg-gray-200'>
                                <img className='h-72 w-64' src={`http://localhost:5000/${product.productImage}`} alt='shirt' />
                            </div>
                            <div className='product-detail flex flex-col justify-center items-center mt-3'>
                                <h3 className='text-xl text-red-500'>{product.name}</h3>
                                <div className='price flex gap-2 items-center justify-center'>
                                    <h4>₹{product.price}/-</h4>
                                    <h4 className='text-gray-500 line-through text-sm'>₹1299/-</h4>
                                </div>
                                <h4 className='text-gray-500 text-center break-words'>{product.description}</h4>
                            </div>
                        </div>
                        </Link>
                    ))
                }

            </div>
        </div>
    )
}

export default ProductCategory