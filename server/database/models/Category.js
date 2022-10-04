const mongoose = require("mongoose");
// const Product = require("./Product");

const categorySchema = mongoose.Schema({
    name:{
        type:String,
        required: true,
        unique:true
    },
    productIds:[{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Product'
    }]
})  

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;