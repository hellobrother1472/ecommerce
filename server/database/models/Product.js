const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'admin',
        required: true
    },
    name:{
        type:String,
        required: true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },    
    specifications:{
        type:String,
    },    
    price:{
        type:Number,
        required:true
    },    
    categoryName:{
        type:String,
        required:true
    },
    productImage:{
        type:String,
        default:'../product.jpg'
    },
    
})  

const Product = mongoose.model("Product",productSchema);

module.exports = Product;