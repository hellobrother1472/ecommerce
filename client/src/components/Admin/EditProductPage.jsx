import React, { useState } from "react";

const EditProductPage = () => {
  const [edit, setEdit] = useState({
    name: false,
    description: false,
    specification: false,
    price: false,
    categoryName: false,
  });
  const handleClick = (event) => {
    event.preventDefault();
    const element = event.target.id;
    setEdit((prev) => {
      return { ...prev, [element]: !prev[element] };
    });
  };
  return (
    <div>
      <div className="h-[90vh] p-2">
        <div className="flex flex-col w-1/2 mx-auto space-x-5 items-center space-y-5 p-4">
          <h1 className="text-center text-4xl font-bold">Edit Product</h1>

          <form className="w-5/6 space-y-4 items-center justify-center">
            <div className="flex justify-center items-center space-x-3">
              <h1 className="inline font-semibold w-40 p-2">Name:</h1>
              {edit.name ? (
                <input
                  type="text"
                  className="p-2 w-full border border-gray-400 rounded-lg outline-none"
                  id="name"
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
                  id="description"
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
                  id="specification"
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
              <h1 className="inline font-semibold w-40 p-2">Price:</h1>
              {edit.price ? (
                <input
                  type="text"
                  className="p-2 w-full border border-gray-400 rounded-lg outline-none"
                  id="price"
                />
              ) : (
                <></>
              )}
              <button
                className="bg-green-400 h-fit p-1 rounded-full w-14"
                id="price"
                onClick={handleClick}
              >
                {edit.price ? "❌" : "Edit"}
              </button>
            </div>

            <div className="flex justify-center items-center space-x-3">
              <h1 className="inline font-semibold w-40 p-2">Category Name:</h1>
              {edit.categoryName ? (
                <input
                  type="text"
                  className="p-2 w-full border border-gray-400 rounded-lg outline-none"
                  id="categoryName"
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
              <button className="bg-green-400 p-4 w-1/2 rounded-full hover:bg-green-500">
                Edit Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProductPage;
