import React, { useState } from 'react';
import { useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import {FaSort} from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom';
import Loading from './Loading';

const ProductCategory = ({setProgress}) => {
    let { id } = useParams();
    const [dropdown, setDropDown] = useState(false);
    const [products, setProducts] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setProgress(10);
            const response = await fetch(`http://localhost:5000/admin/getAllProductsByCategory/${id}`);
            setProgress(40);
            const data = await response.json();
            setProgress(70);
            setProducts(data.productList);
            setProgress(100);
        }

        fetchData();
    }, [id]);

    const handleDropdown = () => {
        setDropDown(!dropdown);
    }

    const sortPriceAsc = () => {
        if(products){
            products.sort(function(pdtA, pdtB){
                return pdtA.discountedPrice - pdtB.discountedPrice;
            })
            setProducts([...products]);
        }
    }

    const sortPriceDesc = () => {
        if(products){
            products.sort(function(pdtA, pdtB){
                return pdtB.discountedPrice - pdtA.discountedPrice;
            })
            setProducts([...products]);
        }
       
    }

    return (
        <div className='flex flex-col justify-center items-center p-6 md:p-8 bg-gray-100'>
            <div className='heading-category flex items-center justify-between smm:justify-between w-1/2 ml-auto smm:ml-0 smm:w-full'>
                <div className='heading'>
                    <h1 className='text-3xl mdm:text-2xl text-royal-blue'>Shirts</h1>
                    <p className='border-b-4 border-red-500 w-10 mx-auto mt-1'></p>
                </div>
                <div className='filter-option flex flex-col'>
                    <div className='filter text-lg mdm:text-sm text-gray-500 border-2 border-gray-300 py-1 px-2 rounded-md cursor-pointer hover:bg-red-500 hover:text-white' onClick={handleDropdown}>
                        <h4 className='flex items-center justify-center gap-1'><FaSort />Sort By: Default</h4>
                    </div>
                    {
                        dropdown && <div className='dropdown p-2 shadow-xl mt-2 bg-white w-40 rounded-md'>
                            <ul className='items text-lg smm:text-sm text-gray-500 cursor-pointer'>
                                <li className='border-b-2 border-gray-400 hover:text-black mt-1' onClick={sortPriceAsc}>Price - Low to High</li>
                                <li className='hover:text-black mt-1' onClick={sortPriceDesc}>Price - High to Low</li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
            <div className='products flex flex-wrap justify-center items-center mt-4'>
                {
                    products ? products.map((product) => (
                        <Link to = {`/product/${product._id}`}>
                        <div key={product._id} className='product bg-white flex flex-col justify-center items-center p-2 mx-6 my-4 cursor-pointer relative hover:scale-110 hover:shadow-2xl duration-200'>
                            <h4 className='flex justify-center items-center text-white bg-red-500 px-1 text-sm rounded-md gap-1 absolute top-2 right-2'>4.5 <AiFillStar /></h4>
                            <div className='image bg-gray-200'>
                                <img className='h-72 w-64' src={product.productImage} loading='lazy' alt='shirt' />
                            </div>
                            <div className='product-detail flex flex-col justify-center items-center mt-3'>
                                <h3 className='text-xl text-red-500'>{product.name}</h3>
                                <div className='price flex gap-2 items-center justify-center'>
                                    <h4>₹{product.discountedPrice}/-</h4>
                                    <h4 className='text-gray-500 line-through text-sm'>₹{product.originalPrice}/-</h4>
                                </div>
                                <h4 className='text-gray-500 w-full text-center break-words'>{product.description.slice(0 ,60)}...</h4>
                            </div>
                        </div>
                        </Link>
                    )) : <Loading/>
                }

            </div>
        </div>
    )
}

export default ProductCategory