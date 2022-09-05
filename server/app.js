const bodyParser = require("body-parser");
const express = require("express");
const { mongoose } = require("mongoose");
const cors = require('cors');
require('dotenv').config();
const connectDB = require("./database/connectDB");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req,res)=>{
    res.send("This is the home route.")
})
app.use('/api/auth', require('./routes/authRoutes'));

const port = process.env.PORT || 5000 ;
app.listen(port, ()=>{
    console.log(`The server is up and running on port ${port}`);
})