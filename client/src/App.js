import React from 'react'
import User from './User'
import Admin from './Admin'
import AdminLogin from './components/Admin/AdminLogin'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<User />} exact/>
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
      {/* <ProductPage /> */}
    </div>
  )
}

export default App