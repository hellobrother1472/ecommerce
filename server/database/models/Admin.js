const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    secret:{
        type:String,
        required:true,
        unique:true
    }
})

const Admin = mongoose.model("Admin",adminSchema);

module.exports = Admin;