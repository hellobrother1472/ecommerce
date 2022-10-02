import React from "react";
import AdminNav from "./components/Admin/AdminNav";
import AdminPanel from "./components/Admin/AllProducts";
import EditProductPage from "./components/Admin/EditProductPage";
import AddProductPage from "./components/Admin/AddProductPage";
import AddAdmin from "./components/Admin/AddAdmin";
import { Routes, Route } from "react-router-dom";
const Admin = () => {
  return (
    <div>
      <AdminNav />
      <Routes>
        <Route path="/" element={<AdminPanel />} />
        <Route path="/addadmin" element={<AddAdmin />} />
        <Route path="/addproduct" element={<AddProductPage />} />
        <Route path="/editproduct" element={<EditProductPage />} />
      </Routes>
    </div>
  );
};

export default Admin;
