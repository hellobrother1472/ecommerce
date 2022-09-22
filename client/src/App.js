import React from 'react'
import Carousel from './components/Carousel'
import Navbar from './components/Navbar'
import FooterTwo from './components/FooterTwo'
import FooterOne from './components/FooterOne'
import ShopUs from './components/ShopUs'
import Arrivals from './components/Arrivals'
import Offer from './components/Offer'
import Product from './components/Product'
// import SignIn from './components/SignIn'
// import SignUp from './components/SignUp'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Carousel />
      <ShopUs />
      <Arrivals />
      <Product />
      <Offer />
      <FooterOne/>
      <FooterTwo/>
      {/* <SignUp/> */}
      {/* <SignIn/> */}
    </div>
  )
}

export default App