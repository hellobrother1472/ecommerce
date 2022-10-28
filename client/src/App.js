import React, {Suspense, lazy} from 'react';
import { Routes, Route } from 'react-router-dom'
import Loading from './components/Loading';

const User = lazy(() => import('./User'));
const Admin = lazy(() => import('./Admin'));
const AdminLogin = lazy(() => import('./components/Admin/AdminLogin'));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="*" element={<User />} exact />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/admin/*" element={<Admin />} exact />
        </Routes>
      </Suspense>
    </>
  )
}

export default App