import React,{useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import FooterTwo from "./components/FooterTwo";
import FooterOne from "./components/FooterOne";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./components/ProductPage";
import ProductCategory from "./components/ProductCategory";
import Checkout from "./components/Checkout";
import { useDispatch } from "react-redux";
import { userLogin } from "./states/actions/userLoginActions";
import { first } from "./states/actions/cartActions";
import LoadingBar from 'react-top-loading-bar';
import Faq from "./components/Faq";

const User = () => {
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();
  const authenticate = async()=>{
    try {
      const res = await fetch("/api/auth/authenticate",{
        method: 'GET',
        credentials: 'include'
      })
      const data = await res.json();
      if(res.status === 200 && data){
        console.log(data.user);
        dispatch(userLogin(data.user));
      }
    } catch (error) {
      console.log(error);
    }
  }

  const setCartCount = ()=>{
    const cartCount = JSON.parse(localStorage.getItem('cartCount'));
    dispatch(first(cartCount));
  }

  useEffect(()=>{
    authenticate();
    setCartCount();
  },[])

  return (
    <>
      <Navbar />
      <LoadingBar
        height={5}
        color={'#EF4444'}
        progress={progress}
      /> 
        <Routes>
          <Route path="/" element={<Home setProgress = {setProgress}/>} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/product/:id" element={<ProductPage setProgress = {setProgress}/>} />
          <Route path="/products/:id" element={<ProductCategory setProgress = {setProgress}/>} />
          <Route path="/checkout" element={<Checkout setProgress = {setProgress}/>} />
        </Routes>
      <FooterOne />
      <FooterTwo />
    </>
  );
};

export default User;
