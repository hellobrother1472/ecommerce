import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const MyProfile = () => {
    let navigate = useNavigate();
    const orders = [];
    const [edit, setEdit] = useState(false);

    const [user, setUser] = useState({
        name: '',
        email: '',
        number: ''
    })

    const loggedIn = useSelector((state) => {return state.userLoginStatusReducer.isSignedIn})
    const userInfo = useSelector((state) => { return state.userLoginStatusReducer.user });
    useEffect(() => {
        if (userInfo) {
            setUser(userInfo);
        }
    }, [userInfo])

    useEffect(() => {
        if(!loggedIn){
            navigate("/signin");
        }
    }, [])

    const handleEdit = (e) => {
        e.preventDefault();
        setEdit(!edit);
    }

    const handleSubmit = async (e, id) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/admin/updateuser/${id}`, {
            method: 'POST',
            credentials: 'include', 
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        const data = await response.json();
        console.log(data);
        setEdit(!edit);
    }

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <div className='profile-page flex flex-col justify-center items-center mt-6 p-4'>
            <div className='profile-heading'>
                <h1 className='text-royal-blue mdm:text-2xl md:text-4xl font-semibold'>My Profile</h1>
                <p className='border-b-4 border-red-500 w-20 mx-auto mt-1'></p>
            </div>
            <div className='profile-content w-3/5 mdm:w-full mt-8 shadow-xl rounded-lg p-4 overflow-auto'>
                <div className='proflie-user-content flex mdm:flex-col justify-center items-start gap-8'>
                    <div className='profile-left w-[35%] mdm:w-full flex justify-center'>
                        <div className='profile-pic'>
                            <img className='h-80 w-80 smm:h-48 smm:w-48 rounded-md' src='https://technext.github.io/hexashop/assets/images/men-02.jpg' alt='Profile Pic' />
                        </div>
                    </div>
                    <div className='profile-right w-3/5 mdm:w-full ml-auto flex flex-col mdm:justify-center mdm:items-center'>
                        <div className='user flex justify-between items-center mdm:flex-col'>
                            <div className='user-desc'>
                                <h1 className='mdm:text-xl md:text-2xl font-semibold'>{user.name}</h1>
                                <h2 className='text-red-500 mdm:text-lg md:text-xl'>Customer</h2>
                            </div>
                            <div className='user-btn flex md:flex-col gap-4'>
                                <button onClick={handleEdit} className='bg-black text-white px-4 py-2 rounded-md mdm:text-sm text-lg border-2 hover:text-black hover:bg-white border-black'>Edit Profile</button>
                                <AnchorLink href='#myorders'><button className='bg-red-500 text-white px-4 py-2 rounded-md mdm:text-sm text-lg border-2 hover:text-red-500 hover:bg-white border-red-500'>My Orders</button></AnchorLink>
                            </div>
                        </div>
                        <div className='user-comp-info mt-14'>
                            <h1 className='mdm:text-xl md:text-2xl font-semibold border-b-2 border-red-400'>About</h1>
                            <div className='user-info p-2'>
                                <div className='user-id flex justify-between items-center mt-4 gap-2'>
                                    <h2 className='text-red-500 mdm:text-base md:text-lg mdm:w-1/5'>UserId: </h2>
                                    <h2 className='mdm:text-base md:text-lg md:w-2/5'>{user._id} </h2>
                                </div>
                                <div className='user-name flex justify-between items-center mt-4'>
                                    <h2 className='text-red-500 mdm:text-base md:text-lg mdm:w-1/5 mr-2'>Name: </h2>
                                    {
                                        edit ? 
                                        <input onChange={handleChange} name='name' className='mdm:text-base md:text-lg md:w-2/5 p-2 border-2 border-gray-300  rounded-md' type='text' value = {user.name} />
                                        : <h2 className='mdm:text-base md:text-lg md:w-2/5'>{user.name} </h2>
                                    }
                                </div>
                                <div className='user-email flex justify-between items-center mt-4'>
                                    <h2 className='text-red-500 mdm:text-base md:text-lg mdm:w-1/5 mr-2 '>Email: </h2>
                                    {
                                        edit ? 
                                        <input onChange={handleChange} name='email' className='mdm:text-base md:text-lg md:w-2/5 p-2 border-2 border-gray-300 rounded-md' type='email' value = {user.email} />
                                        : <h2 className='mdm:text-base md:text-lg md:w-2/5'>{user.email} </h2>
                                    }
                                </div>
                                <div className='user-number flex justify-between items-center mt-4'>
                                    <h2 className='text-red-500 mdm:text-base md:text-lg mdm:w-1/5 mr-2'>Phone: </h2>
                                    {
                                        edit ? 
                                        <input onChange={handleChange} name='number' className='mdm:text-base md:text-lg md:w-2/5 p-2 border-2 border-gray-300 rounded-md' type='text' value = {user.number} />
                                        : <h2 className='mdm:text-base md:text-lg md:w-2/5'>{user.number} </h2>
                                    }
                                </div>
                                <div className='submit-btn'>
                                    {
                                        edit ? <button onClick={(e) => handleSubmit(e, user._id)} className='mt-2 bg-red-500 text-white px-4 py-2 rounded-md mdm:text-sm text-lg border-2 hover:text-red-500 hover:bg-white border-red-500'>Submit</button>
                                        : ''
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div id='myorders' className='myorder-content w-3/5 mdm:w-full mt-8 shadow-xl rounded-lg p-4 mb-10'>
                <div className='order mt-4 flex flex-col'>
                    <div className='order-heading flex justify-center mt-3'>
                        <h1 className='text-royal-blue text-center mdm:text-xl md:text-2xl font-semibold w-32 border-b-2 border-red-500'>My Orders</h1>
                    </div>

                    <div className='my-order-heading flex justify-around items-center mt-6 border-b-2 border-red-200'>
                        <h2 className='mdm:text-sm text-xl w-[10%] text-center smm:hidden'>Order Id</h2>
                        <h2 className='mdm:text-sm text-xl w-[30%] vsmmm:w-[20%] text-center'>Item</h2>
                        <h2 className='mdm:text-sm text-xl w-[10%] vsmmm:w-[14%] text-center'>Quantity</h2>
                        <h2 className='mdm:text-sm text-xl w-[10%] vsmmm:w-[10%] text-center'>Price</h2>
                        <h2 className='mdm:text-sm text-xl w-[20%] vsmmm:w-[18%] text-center'>Action</h2>
                    </div>
                    <div className='myorder-details flex flex-col justify-center items-center mt-4'>
                        {
                            orders.length > 0 ?
                            orders.map((order, i) => (
                                <div className={(i == orders.length - 1) ? 'order flex w-full justify-around items-center px-2 py-3': `order flex w-full justify-around items-center border-b-2 border-gray-200  px-2 py-3`} key = {i}>
                                    <h2 className='w-[10%] text-center mdm:text-sm text-base smm:hidden'>#000000</h2>
                                    <div className='item-detail flex items-center justify-center gap-4 w-[30%] text-center mdm:text-sm text-xl vsmmm:w-[20%]'>
                                        <img className='h-14 w-14 vsmmm:hidden' src = {order.img} alt = 'order-image' />
                                        <h2 className='mdm:text-sm text-base'>{order.h1}</h2>
                                    </div>
                                    <h2 className='w-[10%] text-center mdm:text-sm text-base vsmmm:w-[14%]'>{order.qty}</h2>
                                    <h2 className='w-[10%] text-center mdm:text-sm text-base vsmmm:w-[10%]'>₹{order.qty * order.price}/-</h2>
                                    <h2 className='w-[20%] text-center mdm:text-sm text-base vsmmm:w-[18%]'>View Order | Reorder</h2>
                                </div>
                            ))
                            :
                            <h2 className='mdm:text-xl md:text-2xl font-semibold'>No Shopping has been done till now, If you want to have something here. Go to <Link to = '/'><span className='text-red-500'>Shop Now</span></Link></h2>
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MyProfile