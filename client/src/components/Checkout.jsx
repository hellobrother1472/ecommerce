import React, { useEffect } from 'react';
import { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { AiFillMinusCircle } from 'react-icons/ai';
import { IoMdAddCircle } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartDecrement, cartIncrement } from '../states/actions/cartActions';

const Checkout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [qty, setQty] = useState(1);
    const [change, setChange] = useState(false);
    const [products, setProducts] = useState();
    const [total, setTotal] = useState(0);
    useEffect(() => {
        if(localStorage.getItem('cartItems')){
            const cartItems = JSON.parse(localStorage.getItem('cartItems'));
            setProducts(cartItems);
            let tot = 0;
            let count = 0;
            Object.keys(cartItems).map((item) => {
                tot += cartItems[item].product.price * cartItems[item].qty;
                count += cartItems[item].qty;
            })
            setTotal(tot);
            localStorage.setItem('cartCount', JSON.stringify(count));
        }
    }, [qty])

    const incQty = (productName) => {
        dispatch(cartIncrement(1));
        setQty(qty + 1);
        let product = products[productName];
        product.qty++;
        localStorage.setItem('cartItems', JSON.stringify(products));
    }

    const decQty = (productName) => {
        let product = products[productName];
        if(product.qty > 1){
            product.qty--;
            setQty(qty - 1);
            dispatch(cartDecrement(1));
        }
        else{
            setQty(1);
            product.qty = product.qty;
        }
        localStorage.setItem('cartItems', JSON.stringify(products));
    }

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        address: '',
        phone: '',
        pincode: '',
        state: '',
        district: '',
        addressType: ''
    })

    const handleChange = (e) => {
        setChange(true);
        setUser({...user, [e.target.id]: e.target.value})
    }

    const fetchData = async () => {
        const response = await fetch('http://localhost:5000/admin/userData', {
            method: 'GET',
            credentials: 'include'
        });
        const data = await response.json();
        if(response.status === 404 ){
            navigate("/signin");
        }
        if(data.found) setUser(data.user);
    }

    useEffect(() => {
        
        fetchData();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/admin/checkout', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({firstName: user.firstName, lastName: user.lastName, address: user.address, phone: user.phone, pincode: user.pincode, state: user.state, district: user.district, addressType: user.addressType, onChange: change})
        });

        const data = await response.json();
        console.log(data);
    }

    return (
        <div className='p-8 flex flex-col bg-gray-100 smm:p-4 justify-center'>
            <div className='main-heading flex flex-col justify-center items-center'>
                <h1 className='text-royal-blue mdm:text-2xl md:text-4xl font-semibold'>Shopping Cart</h1>
                <p className='border-b-4 border-red-500 w-20 mx-auto mt-3'></p>
            </div>
            <div className='checkout-details mt-8 flex justify-center items-center gap-8 mdm:flex-wrap-reverse'>
                <div className='user-details bg-white p-4 flex flex-col justify-center items-center w-2/3 mdm:w-full rounded-lg'>
                    <div className='heading'>
                        <h1 className='mdm:text-lg md:text-2xl italic font-semibold text-royal-blue border-b-2 border-gray-300'>Shipping Address</h1>
                    </div>
                    <div className='user-fields bg-gray-200 mt-4 p-4 w-full rounded-lg'>
                        <div className='name flex gap-2'>
                            <div className='name mb-4 flex flex-col gap-2 w-1/2 '>
                                <label htmlFor='firstName' className='text-lg smm:text-sm'>First Name: *</label>
                                <input type='text' name='firstName' id='firstName' placeholder='Your First Name' value={user.firstName} onChange = {handleChange} required className='p-3 rounded-lg focus:outline-none placeholder:text-lg smm:placeholder:text-sm border border-gray-300' />
                            </div>
                            <div className='name mb-4 flex flex-col gap-2 w-1/2'>
                                <label htmlFor='lastName' className='text-lg smm:text-sm'>Last Name: *</label>
                                <input type='text' name='lastName' id='lastName' placeholder='Your Last Name' value={user.lastName} onChange = {handleChange} required className='p-3 rounded-lg focus:outline-none placeholder:text-lg smm:placeholder:text-sm border border-gray-300' />
                            </div>
                        </div>
                        <div className='address mb-4 flex flex-col gap-2 w-full'>
                            <label htmlFor='address' className='text-lg smm:text-sm'>Address: *</label>
                            <textarea type='text' name='address' id='address' onChange = {handleChange} value = {user.address} required rows={3} cols={10} placeholder='Your Address' className='p-3 rounded-lg focus:outline-none placeholder:text-lg smm:placeholder:text-sm border border-gray-300' />
                        </div>
                        <div className='flex gap-2 smm:flex-col'>
                            <div className='phone mb-4 flex flex-col gap-2 w-1/2 smm:w-full'>
                                <label htmlFor='phone' className='text-lg smm:text-sm'>Phone Number: *</label>
                                <input type='text' name='phone' id='phone' placeholder='Phone Number' value={user.phone} onChange = {handleChange} required className='p-3 rounded-lg focus:outline-none placeholder:text-lg smm:placeholder:text-sm border border-gray-300' />
                            </div>
                            <div className='pincode mb-4 flex flex-col gap-2 w-1/2 smm:w-full'>
                                <label htmlFor='pincode' className='text-lg smm:text-sm'>Pincode: *</label>
                                <input type='text' name='pincode' id='pincode' placeholder='Pincode' onChange = {handleChange} value = {user.pincode} required className='p-3 rounded-lg focus:outline-none placeholder:text-lg smm:placeholder:text-sm border border-gray-300' />
                            </div>
                        </div>
                        <div className='flex gap-2 smm:flex-col'>
                            <div className='state mb-4 flex flex-col gap-2 w-1/2 smm:w-full'>
                                <label htmlFor='state' className='text-lg smm:text-sm'>State: *</label>
                                <input type='text' name='state' id='state' placeholder='State' value={user.state} onChange = {handleChange} required className='p-3 rounded-lg focus:outline-none placeholder:text-lg smm:placeholder:text-sm border border-gray-300' />
                            </div>
                            <div className='district mb-4 flex flex-col gap-2 w-1/2 smm:w-full'>
                                <label htmlFor='district' className='text-lg smm:text-sm'>District: *</label>
                                <input type='text' name='district' id='district' placeholder='District' value={user.district} onChange = {handleChange} required className='p-3 rounded-lg focus:outline-none placeholder:text-lg smm:placeholder:text-sm border border-gray-300' />
                            </div>
                        </div>
                        <div className='name mb-4 flex flex-col gap-2'>
                            <label htmlFor='addressType' className='text-lg smm:text-sm'>Address Type: *</label>
                            <div className='radio flex flex-wrap gap-2 items-center'>
                                <input type='radio' name='address-type' id='addressType' onChange = {handleChange} value='home' checked = {user.addressType === 'home'} required/>Home <span className='text-gray-500 text-sm mt-0.5'>(All Day Delivery)</span>
                                <input type='radio' name='address-type' id='addressType' onChange = {handleChange} value='office' checked = {user.addressType === 'office'} className='md:ml-8' required/>Office <span className='text-gray-500 text-sm mt-0.5'>(Delivery between 10AM-5PM)</span>
                            </div>
                        </div>
                        <div className='pay-btn mt-10'>
                            <button onClick = {handleSubmit} className='bg-red-500 px-4 py-2 rounded-md h-12 text-lg text-white hover:bg-red-600 font-bold drop-shadow-lg hover:drop-shadow-2xl mdm:p-2 mdm:mx-auto lgm:mx-auto mdm:w-2/3'>Pay Now</button>
                        </div>
                    </div>
                </div>
                <div className='product-details bg-white p-4 w-1/3 mdm:w-full flex flex-col justify-center items-center rounded-lg'>
                    <div className='order-heading'>
                        <h1 className='text-royal-blue mdm:text-lg md:text-2xl font-semibold border-b-2 border-gray-300 italic'>Your Order</h1>
                    </div>
                    <div className='product-details mt-1 overflow-auto mdm:h-[50vh] max-h-[60vh] w-full'>
                        {   
                            products && Object.keys(products).length !== 0 ? 
                            Object.keys(products).map((pdt, i) => (
                                <div className='flex justify-between items-center mdm:gap-4 gap-10 mt-6 border-t-2 border-gray-300 p-2 pt-4 mr-8 mdm:mr-2' key={i}>
                                    <div className='product-image w-2/5'>
                                        <img src={`http://localhost:5000/${products[pdt].product.productImage}`} alt='product' className='h-28 w-28 rounded-lg' />
                                    </div>
                                    <div className='pdt-detail w-1/2'>
                                        <h1 className='font-semibold text-lg smm:text-sm'>{`${products[pdt].product.name} X ${products[pdt].qty}`}</h1>
                                        <div className='pdt-specs flex gap-4'>
                                            <h3 className='text-gray-400'>Size: <span className='text-black'>XL</span></h3>
                                            <h3 className='text-gray-400'>Color: <span className='text-black'>Red</span></h3>
                                        </div>
                                        <h1 className='font-semibold text-lg smm:text-sm'>₹{products[pdt].product.price}/-</h1>
                                        <div className='flex flex-col'>
                                            <p className='flex items-center md:justify-start gap-1 text-lg smm:text-sm cursor-pointer'><AiFillMinusCircle className='text-red-500' onClick={() => decQty(pdt)} /> {products[pdt].qty} <IoMdAddCircle className='text-red-500' onClick={() => incQty(pdt)} /></p>
                                        </div>
                                    </div>
                                    <div className='edit-pdt w-1/12'>
                                        <div className='cursor-pointer'><MdDelete className='mdm:text-xl text-2xl text-red-500' /></div>
                                    </div>
                                </div>
                            ))
                            : <div className='no-item flex justify-center items-center h-full'>
                                    <h1 className='text-2xl text-center'>No items are added.</h1>
                                </div>
                        }
                    </div>
                    <div className='p-2 w-full flex flex-col justify-center'>
                        <div className='delivery-charges mt-1 flex flex-col justify-center items-center border-t-2 border-gray-300 p-2 pt-4 mr-8 vsmm:mr-2'>
                            <div className='charge flex justify-between items-center w-full '>
                                <h2 className='text-gray-400 text-lg smm:text-sm'>Delivery</h2>
                                <h2 className='text-lg smm:text-sm'>₹120/-</h2>
                            </div>
                            <div className='discount flex justify-between items-center w-full'>
                                <h2 className='text-gray-400 text-lg smm:text-sm'>Discount</h2>
                                <h2 className='text-lg smm:text-sm'>20%</h2>
                            </div>
                        </div>
                        <div className='total flex flex-col justify-center items-center border-t-2 border-gray-300 p-2 pt-4 mr-8 vsmm:mr-2'>
                            <div className='w-full flex justify-between items-center'>
                                <h2 className='font-semibold text-xl smm:text-sm'>Total</h2>
                                <h2 className='text-lg smm:text-sm'>₹{total}/-</h2>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Checkout