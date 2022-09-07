const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'admin',
        required: true
    },
    name:{
        type:String,
        required: true
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
    }
    
})  

const Product = mongoose.model("Product",productSchema);

module.exports = Product;