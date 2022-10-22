import React,{useEffect} from "react";
import AdminNav from "./components/Admin/AdminNav";
import AdminPanel from "./components/Admin/AllProducts";
import EditProductPage from "./components/Admin/EditProductPage";
import AddProductPage from "./components/Admin/AddProductPage";
import AddAdmin from "./components/Admin/AddAdmin";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Admin = () => {
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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    verifyAdmin()
  }, []);

  return (
    <>
      <AdminNav />
      <Routes>
        <Route path="/" element={<AdminPanel />} />
        <Route path="/addadmin" element={<AddAdmin />} />
        <Route path="/addproduct" element={<AddProductPage />} />
        <Route path="/editproduct/:id" element={<EditProductPage />} />
      </Routes>
    </>
  );
};

export default Admin;
