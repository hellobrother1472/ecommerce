import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const EditProductPage = () => {
  const [edit, setEdit] = useState({
    name: false,
    description: false,
    specification: false,
    originalPrice: false,
    discountedPrice: false,
    categoryName: false,
  });

  const [change, setChange] = useState(false);

  const [productDetail, setProductDetail] = useState();


  const handleClick = (event) => {
    event.preventDefault();
    const element = event.target.id;
    setEdit((prev) => {
      return { ...prev, [element]: !prev[element] };
    });
  };

  const [product, setProduct] = useState({
    name: '',
    description: '',
    specification: '',
    originalPrice: '',
    discountedPrice: '',
    categoryName: ''
  })

  const handleChange = (e) => {
    setChange(true);
    setProduct({ ...product, [e.target.id]: e.target.value })
  }

  let { id } = useParams();

  useEffect(() => {
    const fetchData = async (e) => {
      const response = await fetch(`http://localhost:5000/admin/getProduct/${id}`);

      const data = await response.json();
      setProductDetail(data.product);
    }

    fetchData();

  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (change) {
      const response = await fetch(`http://localhost:5000/admin/updateProduct/${id}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ name: product.name, description: product.description, specification: product.specification, price: product.price, categoryName: product.categoryName })
      })

      const data = await response.json();
    }
  }

  return (
    <>
      {
        productDetail && <div className="h-[90vh] p-2">
          <div className="flex flex-col w-1/2 mx-auto space-x-5 items-center space-y-5 p-4">
            <h1 className="text-center text-4xl font-bold">Edit Product</h1>

            <form className="w-5/6 space-y-4 items-center justify-center">
              <div className="flex justify-center items-center space-x-3">
                <h1 className="inline font-semibold w-40 p-2">Name:</h1>
                {edit.name ? (
                  <input
                    type="text"
                    className="p-2 w-full border border-gray-400 rounded-lg outline-none"
                    id="name" onChange={handleChange} defaultValue={productDetail.name}
                  />
                ) : (
                  <></>
                )}
                <button
                  className="bg-green-400 h-fit p-1 rounded-full w-14"
                  id="name"
                  onClick={handleClick}
                >
                  {edit.name ? "❌" : "Edit"}
                </button>
              </div>

              <div className="flex justify-center items-center space-x-3">
                <h1 className="inline font-semibold w-40 p-2">Description:</h1>
                {edit.description ? (
                  <textarea
                    type="text"
                    className="p-2 h-40 w-full border border-gray-400 rounded-lg outline-none"
                    id="description" onChange={handleChange} value={productDetail.description}
                  />
                ) : (
                  <></>
                )}
                <button
                  className="bg-green-400 h-fit p-1 rounded-full w-14"
                  id="description"
                  onClick={handleClick}
                >
                  {edit.description ? "❌" : "Edit"}
                </button>
              </div>

              <div className="flex justify-center items-center space-x-3">
                <h1 className="inline font-semibold w-40 p-2">Specification:</h1>
                {edit.specification ? (
                  <input
                    type="text"
                    className="p-2 w-full border border-gray-400 rounded-lg outline-none"
                    id="specification" onChange={handleChange} value={productDetail.specification}
                  />
                ) : (
                  <></>
                )}
                <button
                  className="bg-green-400 h-fit p-1 rounded-full w-14"
                  id="specification"
                  onClick={handleClick}
                >
                  {edit.specification ? "❌" : "Edit"}
                </button>
              </div>

              <div className="flex justify-center items-center space-x-3">
                <h1 className="inline font-semibold w-40 p-2">Original Price:</h1>
                {edit.originalPrice ? (
                  <input
                    type="text"
                    className="p-2 w-full border border-gray-400 rounded-lg outline-none"
                    id="originalPrice" onChange={handleChange} value={productDetail.originalPrice}
                  />
                ) : (
                  <></>
                )}
                <button
                  className="bg-green-400 h-fit p-1 rounded-full w-14"
                  id="originalPrice"
                  onClick={handleClick}
                >
                  {edit.originalPrice ? "❌" : "Edit"}
                </button>
              </div>

              <div className="flex justify-center items-center space-x-3">
                <h1 className="inline font-semibold w-40 p-2">Discounted Price:</h1>
                {edit.discountedPrice ? (
                  <input
                    type="text"
                    className="p-2 w-full border border-gray-400 rounded-lg outline-none"
                    id="discountedPrice" onChange={handleChange} value={productDetail.discountedPrice}
                  />
                ) : (
                  <></>
                )}
                <button
                  className="bg-green-400 h-fit p-1 rounded-full w-14"
                  id="discountedPrice"
                  onClick={handleClick}
                >
                  {edit.discountedPrice ? "❌" : "Edit"}
                </button>
              </div>

              <div className="flex justify-center items-center space-x-3">
                <h1 className="inline font-semibold w-40 p-2">Category Name:</h1>
                {edit.categoryName ? (
                  <input
                    type="text"
                    className="p-2 w-full border border-gray-400 rounded-lg outline-none"
                    id="categoryName" onChange={handleChange} value={productDetail.categoryName}
                  />
                ) : (
                  <></>
                )}
                <button
                  className="bg-green-400 h-fit p-1 rounded-full w-14"
                  id="categoryName"
                  onClick={handleClick}
                >
                  {edit.categoryName ? "❌" : "Edit"}
                </button>
              </div>

              <div className="text-center">
                <button className="bg-green-400 p-4 w-1/2 rounded-full hover:bg-green-500" onClick={handleSubmit}>
                  Edit Product
                </button>
              </div>
            </form>
          </div>
        </div>
      }
    </>
  );
};

export default EditProductPage;
