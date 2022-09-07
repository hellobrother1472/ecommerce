const express = require('express');
const router = express.Router();
const adminAuth = require('../middlewares/adminAuthentication');
const app = express();
const Product = require('../database/models/Product');

router.post("/addProduct",adminAuth, async (req,res)=>{
    try{
        let {name, description, price, categoryName} = req.body;

        let product = await Product.create({
            name, description, price, categoryName
        });

        res.json({product, message: "Product has been added successfully"});
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

router.post('/updateProduct/:id', adminAuth, async (req, res) => {
    try{
        let {name, description, price, categoryName} = req.body;
        const newProduct = {};
        if(name){
            newProduct.name = name;
        }
        if(description){
            newProduct.description = description;
        }
        if(price){
            newProduct.price = price;
        }
        if(categoryName){
            newProduct.categoryName = categoryName;
        }

        let product = await Product.findById(req.params.id);
        if(!product){
            return res.status(404).send("Product is not found!");
        }

        if(product.admin.toString() !== req.admin.id){
            return res.status(401).send("Not Allowed");
        }
        product = await Product.findByIdAndUpdate(req.params.id, { $set: newProduct }, { new: true })
        res.json({ product, message: "Product has been added successfully!" });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

router.post('/deleteProduct/:id', adminAuth, async (req, res) => {
    try{
        const product = await Product.findByIdAndDelete(req.params.id);
        res.json({message: "Product has been deleted successfully", product});
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// add pictures in product model
// product description
// get productData 
// get categoryData 

// admin panel route and authentication(/admin/login)
// for postData admin middleware  
// add data and remove product and category


// email and mobile notification on checkout
// Forgot password feature
// reset password routes
// order history feature (add data after buy)
// addToCart (data saved in local storage)

module.exports = router;