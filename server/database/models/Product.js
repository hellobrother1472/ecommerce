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
    originalPrice:{
        type:Number,
        required:true
    },
    discountedPrice: {
        type: Number,
        required: true
    },    
    categoryName:{
        type:String,
        required:true
    },
    productImage:{
        type:String,
        default:'../product.jpg'
    },
    rating: {
        type: Number,
        default: 0
    },
    avgRating: {
        type: Number,
        default: 0
    },
    totalPeople: {
        type: Number,
        default: 0
    }
    
})  

const Product = mongoose.model("Product",productSchema);

module.exports = Product;