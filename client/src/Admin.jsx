import React, { useState, useEffect, Suspense, lazy } from "react";
import AdminNav from "./components/Admin/AdminNav";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Loading from "./components/Loading";
const AdminPanel = lazy(() => import('./components/Admin/AllProducts'));
const AddAdmin = lazy(() => import('./components/Admin/AddAdmin'));
const AddProductPage = lazy(() => import('./components/Admin/AddProductPage'));
const EditProductPage = lazy(() => import('./components/Admin/EditProductPage'));
const Admin = () => {
  const [adminVerification,setAdminVerification] = useState(false);
  const navigate = useNavigate();
  const verifyAdmin = async () => {
    try {
      const res = await fetch("/api/admin/auth/verifyAdmin", {
        method: "GET",
        credentials: "include",
      });
      if (res.status !== 200) {
        navigate("/adminlogin");
      }
      else{
        setAdminVerification(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    verifyAdmin()
  }, []);

  if(adminVerification===false){
    return(<Loading/>)
  }

  return (
    <>
      <AdminNav />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<AdminPanel />} />
          <Route path="/addadmin" element={<AddAdmin />} />
          <Route path="/addproduct" element={<AddProductPage />} />
          <Route path="/editproduct/:id" element={<EditProductPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Admin;
