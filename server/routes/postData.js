const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const adminAuth = require('../middlewares/adminAuthentication');
const app = express();
const Product = require('../database/models/Product');

router.post("/addProduct", [
    body('name', 'Enter a valid name and length must be more thean 3').isLength({ min: 3 }),
    body('description', 'Descriptio cannot be blank').exists(),
    body('price', 'Price cannot be blank').exists(),
    body('categoryName', 'CategoryName cannot be blank').exists(),
    adminAuth
], async (req, res) => {
    const errors = validationResult(req); // Errors in given product information

    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }
    
    try {
        let { name, description, price, categoryName } = req.body;
        const isProduct = await Product.findOne({ name });

        if (isProduct) {
            res.status(404).send({ error: "Product already exists" });
        }
        else {
            let product = await Product.create({
                admin: req.admin._id, name, description, price, categoryName
            });

            res.json({ product, message: "Product has been added successfully" });
        }

    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

router.post('/updateProduct/:id', adminAuth, async (req, res) => {
    try {
        let { name, description, price, categoryName } = req.body;
        const newProduct = {};
        if (name) {
            newProduct.name = name;
        }
        if (description) {
            newProduct.description = description;
        }
        if (price) {
            newProduct.price = price;
        }
        if (categoryName) {
            newProduct.categoryName = categoryName;
        }

        let product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).send("Product is not found!");
        }

        if (product.admin.toString() !== req.admin.id) {
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
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.json({ message: "Product has been deleted successfully", product });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// add pictures in product model
// product description (Done)
// get productData (Done)
// get categoryData (Done)

// admin panel route and authentication(/admin/login) (Done)
// for postData admin middleware   (Done)
// add data and remove product and category (Done)


// email and mobile notification on checkout
// Forgot password feature
// reset password routes
// order history feature (add data after buy)
// addToCart (data saved in local storage)

module.exports = router;