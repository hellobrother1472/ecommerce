const bodyParser = require("body-parser");
const express = require("express");
const { default: mongoose } = require("mongoose");
require('dotenv').config();
const connectDB = require("./database/connectDB");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

connectDB();

app.get("/", (req,res)=>{
    res.send("This is the home route.")
})

const port = process.env.PORT || 5000 ;
app.listen(port, ()=>{
    console.log(`The server is up and running on port ${port}`);
})