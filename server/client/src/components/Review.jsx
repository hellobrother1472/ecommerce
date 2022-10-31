import React from 'react'
import { useState, useEffect } from 'react';
import { useAsyncError, useParams } from 'react-router-dom';
import { GiEarthAmerica } from 'react-icons/gi';
import Loading from './Loading';
import {AiFillStar} from 'react-icons/ai';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from 'react-redux';
import { reviewClickedTrue } from '../states/actions/reviewClicked';

const Review = () => {
    const reviewClickedDispatch = useDispatch();
    const [reviewDetail, setReviewDetail] = useState({
        review: ''
    })
    const [change, setChange] = useState(false);
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0);

    const [product, setProduct] = useState();
    const {id} = useParams();

    const options = {
        position: "top-right",
        autoClose: 10000,
        pauseOnHover: true,
        draggable: false,
        theme: "dark",
      };

    const onChangeHandler = (e) => {
        setChange(true);
        setReviewDetail({ ...reviewDetail, [e.target.id]: e.target.value })
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/admin/getProduct/${id}`);
            const data = await response.json();
            setProduct(data.product);
        }

        fetchData();
    }, [])

    const handleValidation = () => {
        const { review } = reviewDetail;
    
        if (change && review.length < 3) {
          toast.error("Review should be of atleast 3 in length", options);
          return false;
        } 
        else if(currentValue === 0){
            toast.error("Please! Give rating also");
            return false;
        }
    
        return true;
      };

    const handleSubmit  = async(e, id) => {
        e.preventDefault();
        if(handleValidation()){
            const response = await fetch(`/admin/rating/${id}`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({rating: currentValue})
            })
            if(response.status === 200){
                reviewClickedDispatch(reviewClickedTrue());
            }
            const data = await response.json();

            if(change){
                const res = await fetch(`/admin/review/${id}`, {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({review: reviewDetail.review})
                })

                const dta = await res.json();
            }
            setCurrentValue(0);
            toast.success("Rating has been submited successfully");
        }
    }

    const handleClick = (value) => {
        setCurrentValue(value);
    }

    const handleMouseOver = (value) => {
        setHoverValue(value);
    }

    const handleMouseLeave = () => {
        setHoverValue(undefined);
    }

    return (
        <div className='p-8 flex flex-col smm:p-4 justify-center w-[50vw] mx-auto mdm:w-full'>
            <div className='review-heading flex flex-col justify-center items-center'>
                <h1 className='text-royal-blue mdm:text-2xl md:text-4xl font-semibold'>Review</h1>
                <p className='border-b-4 border-red-500 w-20 mx-auto mt-2'></p>
            </div>
            {
                product ? <div className='product-detail mt-4 bg-gray-100 p-4 rounded-xl'>
                <div className='product-desc flex flex-col justify-center py-2 px-3'>
                    <div className='product flex gap-4 items-center'>
                        <img className='h-10 w-10 rounded-md' src={product.productImage} alt='productImg' />
                        <h1 className='text-2xl smm:text-lg'>{product.name}</h1>
                    </div>
                    <div className='product-public flex items-center mt-2 text-gray-500 gap-2'>
                        <h3><GiEarthAmerica /></h3>
                        <h3>Your review will be posted publicy on the web.</h3>
                    </div>
                </div>
                <div className='product-review p-3'>
                    <div className='stars flex mb-4 text-3xl smm:text-sm'>
                        {
                            stars.map((_, index) => (
                                <AiFillStar key={index} onClick={() => handleClick(index + 1)} onMouseOver={() => handleMouseOver(index + 1)} onMouseLeave={handleMouseLeave} className={(hoverValue || currentValue) > index ? 'text-orange-500' : 'text-gray-500'}/>
                            ))
                        }
                    </div>
                    <div >
                        <textarea name="review" id="review" rows="5" placeholder="Write a Review" className="w-full p-3 placeholder:text-lg border border-gray-300 rounded-lg focus:outline-none"
                            onChange={onChangeHandler}
                            value={reviewDetail.review}
                        ></textarea>
                    </div>
                    <button onClick={(e) => handleSubmit(e, product._id)} className='bg-red-500 text-white px-4 py-2 mt-2 rounded-md mdm:text-sm text-lg border-2 hover:text-red-500 hover:bg-white border-red-500'>Submit Review</button>
                </div>
            </div>
            
            : <Loading />
            }
            <ToastContainer />
        </div>
    );
};

export default Review