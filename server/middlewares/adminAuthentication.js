var express = require('express');
const jwt = require('jsonwebtoken');
const Admin = require("../database/models/Admin")

const adminAuthentication = async (req,res,next)=>{
    try {
        const token = req.cookies.adminjwt;
        const decode = jwt.verify(token,process.env.JWT_ADMIN_SECRET);
        
        const admin = await Admin.findById(decode.admin.id);
        if(!admin){
            res.status(401).send({ error: "Admin authentication error" })
            throw new Error("Admin authentication error");
        }
        req.admin = admin;
        next();
        
    } catch (error) {
        console.log(error.message);
        res.status(404).send({error:error.message});
    }
}

module.exports = adminAuthentication;
