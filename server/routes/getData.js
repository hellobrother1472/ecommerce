const express = require('express');
const router = express.Router();
const Product = require('../database/models/Product');
const Category = require('../database/models/Category');

router.get('/getProduct/:id', async (req, res) => {
    try{
        let productId = req.params.id;

        let product = await Product.findById(productId);
        res.json({product});
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

router.get('/getAllProduct', async (req, res) => {
    try{
        let products = await Product.find();
        res.json({products});
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

router.get('/getAllCategory', async (req, res) => {
    try{
        let category = await Category.find();
        res.json({category});
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

router.get("/getAllProductsByCategory/:id", async (req, res) => {
    try{
        const category = await Category.findById(req.params.id);
        const productList = await Product.find({categoryName:category.name})
        res.json({productList});
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;