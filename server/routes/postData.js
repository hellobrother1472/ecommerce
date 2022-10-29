const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const adminAuth = require('../middlewares/adminAuthentication');
const app = express();
const fs = require('fs');
const multer = require('multer');
const Product = require('../database/models/Product');
const Category = require('../database/models/Category');
// const sharp = require('sharp');
const cloudinary = require("cloudinary").v2;
const path = require('path');
const authentication = require('../middlewares/authentication');
const User = require('../database/models/User');


const multerStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
});

const filter = function (req, file, cb) {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png' || file.mimetype === 'image/webp') {
        cb(null, true);
    }
    else {
        cb(new Error('Not an Image! Please upload an image'), false);
    }
}

const upload = multer({
    storage: multerStorage,
    fileFilter: filter
})

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_NAME,
    api_secret: process.env.API_SECRET,
});

// const upload = multer({
//     storage: multer.memoryStorage(),
//     // fileFilter: filter
// })

const uploadToCloudinary = async (localFilePath) => {
    var fileNameOnCloudinary = localFilePath.substring(14, localFilePath.length - 5);
    return cloudinary.uploader
        .upload(localFilePath, { public_id: fileNameOnCloudinary, folder: 'combpro/productImages', format: 'webp', fetch_format: 'auto', quality: 'auto', crop: 'scale' })
        .then((result) => {
            fs.unlinkSync(localFilePath);
            return {
                message: "Success",
                url: result.url,
            };
        })
        .catch((error) => {
            console.log(error.message);
            fs.unlinkSync(localFilePath);
            return { message: "Fail" };
        });
}

router.post("/addProduct", [
    adminAuth,
    upload.single('productImage')
], async (req, res) => {
    try {
        let date = Date.now();
        let { name, description, originalPrice, discountedPrice, categoryName } = req.body;
        const isProduct = await Product.findOne({ name });
        //    await sharp(req.file.buffer)
        //    .resize(320, 240)
        //    .toFile('public/images/' + date + req.file.originalname)

        //    let path = 'images\\' + date + req.file.originalname;

        let path = req.file.path;
        var result = await uploadToCloudinary(path);
        if (result) {
            path = result.url;
        }

        if (isProduct) {
            res.status(404).send({ error: "Product already exists" });
        }
        else {
            let product = await Product.create({
                admin: req.admin._id, name, description, originalPrice, discountedPrice, categoryName, productImage: path
            });

            // Getting the name and finding the category.
            const catName = product.categoryName;
            const findCategory = await Category.findOne({ name: catName });

            // if found update it else create new
            if (findCategory) {
                findCategory.productIds.push(product._id);
                const updatedCategory = await Category.findByIdAndUpdate(findCategory._id, { $set: { productIds: findCategory.productIds } }, { new: true })
            }
            else {
                const newCategory = await Category.create({
                    name: catName, productIds: [product._id]
                })
            }

            res.json({ product, message: "Product has been added successfully" });
        }

    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})

router.post('/updateProduct/:id', adminAuth, async (req, res) => {
    try {
        let { name, description, originalPrice, discountedPrice, categoryName } = req.body;
        let product = await Product.findById(req.params.id);
        const newProduct = {};
        if (name) {
            newProduct.name = name;
        }
        if (description) {
            newProduct.description = description;
        }
        if (originalPrice) {
            newProduct.originalPrice = originalPrice;
        }
        if (discountedPrice) {
            newProduct.discountedPrice = discountedPrice;
        }
        if (categoryName) {
            newProduct.categoryName = categoryName;
            // Getting the name and finding the category.
            const catName = product.categoryName;
            const findCategory = await Category.findOne({ name: catName });
            const newFindCategory = await Category.findOne({ name: categoryName });

            // if found update it
            if (findCategory && newFindCategory) {
                // Deleting the product from previous category
                const array = findCategory.productIds;
                const index = array.indexOf(product._id);
                array.splice(index, 1);
                const updatedPrevCategory = await Category.findByIdAndUpdate(findCategory._id, { $set: { productIds: array } }, { new: true });

                // Adding the product to new category
                newFindCategory.productIds.push(product._id);
                const updatedNewCategory = await Category.findByIdAndUpdate(newFindCategory._id, { $set: { productIds: newFindCategory.productIds } }, { new: true })
            }
        }

        if (!product) {
            return res.status(404).send("Product is not found!");
        }

        if (product.admin.toString() !== req.admin.id) {
            return res.status(401).send("Not Allowed");
        }
        product = await Product.findByIdAndUpdate(req.params.id, { $set: newProduct }, { new: true })
        res.json({ product, message: "Product has been updated successfully!" });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({message:"Internal Server Error"});
    }
})

router.post("/updateCategoryName/:id", adminAuth, async (req, res) => {
    try {
        const { newCategoryName } = req.body;

        // Finding category with id
        const category = await Category.findById(req.params.id);

        // update in the category schema  
        const updatedCategory = await Category.findByIdAndUpdate(req.params.id, { $set: { name: newCategoryName } }, { new: true });

        // updating in product schema
        const updatedProducts = await Product.updateMany({ categoryName: category.name }, { $set: { categoryName: newCategoryName } }, { new: true });

        res.json({ message: "Category name has been updated successfully!" });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})

router.post('/deleteProduct/:id', adminAuth, async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        // Getting the name and finding the category.
        const catName = product.categoryName;
        const findCategory = await Category.findOne({ name: catName });

        // if found update it
        if (findCategory) {
            const array = findCategory.productIds;
            const index = array.indexOf(product._id);
            array.splice(index, 1);
            const updatedCategory = await Category.findByIdAndUpdate(findCategory._id, { $set: { productIds: array } }, { new: true })
        }

        if (findCategory.productIds.length === 0) {
            await Category.findOneAndDelete(catName);
        }

        const products = await Product.find({});

        res.json({ message: "Product has been deleted successfully", product, products });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})

router.post('/updateuser/:id', authentication, async (req, res) => {
    try {
        let { name, email, number } = req.body;
        let user = await User.findById(req.params.id);
        const newUser = {};
        if (name) {
            newUser.name = name;
        }
        if (email) {
            newUser.email = email;
        }
        if(number){
            newUser.number = number;
        }

        if (!user) {
            return res.status(404).send("User is not found!");
        }

        if (user._id.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        user = await User.findByIdAndUpdate(req.params.id, { $set: newUser }, { new: true });
        res.json({ user: user, message: "User has been updated successfully!" });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})



// const updateProductImage = (req, res) => {
//     res.json({
//         message: 'file uploaded successfully'
//     });
// }

// router.post('/productImage', upload.single('photo'), updateProductImage);
// router.get('/productImage', (req, res) => {
//     res.sendFile(__dirname + '/multer.html');
// })

// add pictures in product model

// email and mobile notification on checkout
// Forgot password feature
// reset password routes
// order history feature (add data after buy)
// addToCart (data saved in local storage)

module.exports = router;