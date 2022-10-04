import React from 'react'
import User from './User'
import Admin from './Admin'
import AdminLogin from './components/Admin/AdminLogin'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<User />} exact>
          <Route path="signin" />
          <Route path="signup" />
          <Route path = 'product/:id' />
        </Route>
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} exact>
          <Route path="addadmin" />
          <Route path="addproduct" />
          <Route path="editproduct" />
          
        </Route>
      </Routes>
      {/* <ProductPage /> */}
    </div>
  )
}

export default App