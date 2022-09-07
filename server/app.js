const bodyParser = require("body-parser");
const express = require("express");
const { mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require('cors');
require('dotenv').config();
const connectDB = require("./database/connectDB");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(cookieParser());

connectDB();

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/admin/auth', require('./routes/adminAuth'));
app.get("/", (req,res)=>{
    res.send("This is the home route.")
})

const port = process.env.PORT || 5000 ;
app.listen(port, ()=>{
    console.log(`The server is up and running on port ${port}`);
})