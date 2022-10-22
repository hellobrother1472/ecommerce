var express = require('express');
const jwt = require('jsonwebtoken');
const User = require("../database/models/User")

const adminAcessAuthentication = async (req,res,next)=>{
    try {
        const token = req.cookies.jwt;
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        const user = await User.findById(decode.user.id);
        if(!user){
            res.status(401).send({ error: "Admin authentication error" })
        }
        if(user.email !== process.env.ADMIN){
            res.status(401).send({ error: "Admin Access authentication error" })
        }
        next();
        
    } catch (error) {
        console.log(error.message);
        res.status(404).send({error:error.message});
    }
}

module.exports = adminAcessAuthentication;