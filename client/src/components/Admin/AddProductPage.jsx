import React, { useState } from "react";

const AddProductPage = () => {
  const [name, setName] = useState("");
  const [specification, setSpecification] = useState("");
  const [description, setDescription] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "specification") {
      setSpecification(e.target.value);
    }
    if (e.target.name === "description") {
      setDescription(e.target.value);
    }
    if (e.target.name === "originalPrice") {
      setOriginalPrice(e.target.value);
    }
    if (e.target.name === "discountedPrice") {
      setDiscountedPrice(e.target.value);
    }
    if (e.target.name === "categoryName") {
      setCategoryName(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("productImage", image);
    formData.append("name", name);
    formData.append("specification", specification);
    formData.append("description", description);
    formData.append("originalPrice", originalPrice);
    formData.append("discountedPrice", discountedPrice);
    formData.append("categoryName", categoryName);
    const response = await fetch('http://localhost:5000/admin/addProduct', {
      method: 'POST',
      credentials: 'include',
      body: formData
    })


    const data = await response.json();
    console.log(data);
  };
  return (
    <div className="h-[90vh] p-2">
      <div className="flex flex-col w-1/2 mx-auto space-x-5 items-center space-y-5 p-4">
        <h1 className="text-center text-4xl font-bold">Add Product</h1>

        <form className="w-5/6 space-y-4 items-center justify-center">
          <div className="flex">
            <h1 className="inline font-semibold w-40 p-2">Name:</h1>
            <input
              type="text"
              onChange={handleChange}
              name="name"
              className="p-2 w-full border border-gray-400 rounded-lg outline-none"
              id="name"
              placeholder="Required"
              required
            />
          </div>
          <div className="flex">
            <h1 className="inline font-semibold w-40 p-2">Description:</h1>
            <textarea
              type="text"
              onChange={handleChange}
              name="description"
              className="p-2 h-40 w-full border border-gray-400 rounded-lg outline-none"
              id="description"
              placeholder="Required"
              required
            />
          </div>
          <div className="flex">
            <h1 className="inline font-semibold w-40 p-2">Specification:</h1>
            <input
              type="text"
              onChange={handleChange}
              name="specifications"
              className="p-2 w-full border border-gray-400 rounded-lg outline-none"
              id="specification"
              required
            />
          </div>
          <div className="flex">
            <h1 className="inline font-semibold w-40 p-2">Original Price:</h1>
            <input
              type="number"
              onChange={handleChange}
              name="originalPrice"
              min={1}
              className="p-2 w-full border border-gray-400 rounded-lg outline-none"
              id="originalPrice"
              placeholder="Required"
              required
            />
          </div>
          <div className="flex">
            <h1 className="inline font-semibold w-40 p-2">Discounted Price:</h1>
            <input
              type="number"
              onChange={handleChange}
              name="discountedPrice"
              min={1}
              className="p-2 w-full border border-gray-400 rounded-lg outline-none"
              id="discountedPrice"
              placeholder="Required"
              required
            />
          </div>
          <div className="flex">
            <h1 className="inline font-semibold w-40 p-2">Category Name:</h1>
            <input
              type="text"
              onChange={handleChange}
              name="categoryName"
              className="p-2 w-full border border-gray-400 rounded-lg outline-none"
              id="categoryName"
              placeholder="Required"
              required
            />
          </div>
          <div className="flex">
            <h1 className="inline font-semibold w-40 p-2">Product Image:</h1>
            <input onChange={handleImage} type="file" className="p-2" id="productImage" name="productImage" required />
          </div>
          <div className="text-center">
            <button
              onClick={handleSubmit}
              className="bg-green-400 p-4 w-1/2 rounded-full hover:bg-green-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;
