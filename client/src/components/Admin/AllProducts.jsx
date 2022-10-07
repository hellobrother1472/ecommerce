import React, { useState, useEffect } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const AllProducts = () => {
  const [products, setProducts] = useState();
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/admin/getAllProduct"
        );
        const data = await response.json();
        if (data) {
          setProducts(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [products]);

  const deleteClickHandler = async (e, id) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/admin/deleteProduct/${id}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      }
    })

    const data = await response.json();
  };

  const editClickHandler = (e, product) => {
    e.preventDefault();
    navigate(`/admin/editproduct/${product._id}`);
  }

  return (
    
    <div className="py-10 px-8 text-center space-y-7">
      {products &&
      <>
        <div>
        <h1 className="text-4xl font-bold">Product List</h1>
      </div>

      <div className="p-4">
        <ul className="space-y-5">
          {products.products.map((product, index) => {
            return (
              <li
                className="flex justify-between items-center border rounded-lg px-8 shadow-md hover:shadow-lg"
                key={index}
              >
                <div className="flex items-center p-2 space-x-10">
                  <img
                    className="w-20 h-20 rounded-md"
                    src={`http://localhost:5000/${product.productImage}`}
                    alt="img"
                  />
                  <h1 className="h-fit w-80 text-center px-3 text-[1.2rem] font-[600]">
                    {product.name}
                  </h1>
                  <h2 className="h-fit w-fit text-center px-3">
                    ₹{product.price}/-
                  </h2>
                </div>

                <div className="flex p-2 space-x-8 items-center">
                  <Link to="/admin/editproduct">
                    <button className="flex bg-green-300 px-4 items-center space-x-2 py-1 rounded-full hover:bg-green-400 hover:shadow-md" onClick={(e) => editClickHandler(e, product)}>
                      <MdEdit />
                      <h1>Edit</h1>
                    </button>
                  </Link>
                  <button
                    className="flex bg-red-400 px-4 items-center space-x-2 py-1 rounded-full hover:bg-red-500 hover:shadow-md"
                    onClick={(e) => deleteClickHandler(e, product._id)}
                  >
                    <MdDelete />
                    <h1>Delete</h1>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      </>}
      
    </div>
  );
};

export default AllProducts;
