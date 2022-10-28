import React,{useEffect, useState, Suspense, lazy} from "react";
import Navbar from "./components/Navbar";
import FooterTwo from "./components/FooterTwo";
import FooterOne from "./components/FooterOne";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "./states/actions/userLoginActions";
import { first } from "./states/actions/cartActions";
import LoadingBar from 'react-top-loading-bar';
import Loading from "./components/Loading";
const Home = lazy(() => import('./components/Home'));
const SignIn = lazy(() => import('./components/SignIn'));
const SignUp = lazy(() => import('./components/SignUp'));
const ProductPage = lazy(() => import('./components/ProductPage'));
const ProductCategory = lazy(() => import('./components/ProductCategory'));
const Checkout = lazy(() => import('./components/Checkout'));
const Faq = lazy(() => import('./components/Faq'));
const MyProfile = lazy(() => import('./components/MyProfile'));
const Contact = lazy(() => import('./components/Contact'));

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
      if(res.status === 200){
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
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<Home setProgress = {setProgress}/>} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/product/:id" element={<ProductPage setProgress = {setProgress}/>} />
          <Route path="/products/:id" element={<ProductCategory setProgress = {setProgress}/>} />
          <Route path="/checkout" element={<Checkout setProgress = {setProgress}/>} />
        </Routes>
        </Suspense>

      <FooterOne />
      <FooterTwo />
    </>
  );
};

export default User;
