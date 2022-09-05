const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    
    categoryName:[{
        type:String,
        required:true,
        ref:'category'
    }]
})  

const Product = mongoose.model("Product",productSchema);

module.exports = Product;