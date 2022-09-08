const express = require('express');
const router = express.Router();
const Product = require('../database/models/Product');

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

module.exports = router;