import React from 'react'
import Carousel from './components/Carousel'
import Navbar from './components/Navbar'
import FooterTwo from './components/FooterTwo'
import FooterOne from './components/FooterOne'
import ShopUs from './components/ShopUs'
import Arrivals from './components/Arrivals'
import Offer from './components/Offer'
import Product from './components/Product'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import AdminNav from './components/Admin/AdminNav'
import AdminPanel from './components/Admin/AllProducts'
import EditProductPage from './components/Admin/EditProductPage'
import AddProductPage from './components/Admin/AddProductPage'
import ProductPage from './components/ProductPage'


const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <Carousel />
      <ShopUs />
      <Arrivals />
      <Product />
      <Offer />
      <FooterOne/>
      <FooterTwo/> */}
      {/* <SignUp/> */}
      {/* <SignIn/> */}
      {/* <AdminNav /> */}
      {/* <AdminPanel /> */}
      {/* <EditProductPage/> */}
      {/* <AddProductPage/> */}

      {/* <FooterTwo /> */}
      <ProductPage />
      {/* <SignUp/>
      <SignIn/> */}
    </div>
  )
}

export default App