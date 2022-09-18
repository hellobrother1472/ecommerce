import React from 'react'
import Carousel from './components/Carousel'
import Navbar from './components/Navbar'
import FooterTwo from './components/FooterTwo'
import FooterOne from './components/FooterOne'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Carousel />
      <FooterOne/>
      <FooterTwo/>
    </div>
  )
}

export default App