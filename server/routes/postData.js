const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const adminAuth = require('../middlewares/adminAuthentication');
const app = express();
const multer = require('multer');
const Product = require('../database/models/Product');
const Category = require('../database/models/Category');

router.post("/addProduct", [
    body('name', 'Enter a valid name and length must be more thean 3').isLength({ min: 3 }),
    body('description', 'Description cannot be blank').exists(),
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
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

router.post('/updateProduct/:id', adminAuth, async (req, res) => {
    try {
        let { name, description, price, categoryName } = req.body;
        let product = await Product.findById(req.params.id);
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
        res.json({ product, message: "Product has been added successfully!" });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
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
        console.error(error.message);
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

        res.json({ message: "Product has been deleted successfully", product });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

const multerStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
        cb(null, `user-${Date.now()}.jpeg`)
    }
});

const filter = function (req, file, cb) {
    if (file.mimetype.startsWith('image')) {
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

const updateProductImage = (req, res) => {
    res.json({
        message: 'file uploaded successfully'
    });
}

router.post('/productImage', upload.single('photo'), updateProductImage);
router.get('/productImage', (req, res) => {
    res.sendFile(__dirname + '/multer.html');
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