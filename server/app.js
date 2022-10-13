const bodyParser = require("body-parser");
const express = require("express");
const { mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require('cors');
require('dotenv').config();
const connectDB = require("./database/connectDB");
const path = require('path');

const corsOptions = {
    origin: true, //included origin as true
    credentials: true, //included credentials as true
}

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

connectDB();

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/admin/auth', require('./routes/adminAuth'));
app.use('/admin', require('./routes/postData'));
app.use('/admin', require('./routes/getData'));
app.use('/admin', require('./routes/checkout'));
app.get("/", (req,res)=>{
    res.send("This is the home route.")
})

const port = process.env.PORT || 5000 ;
app.listen(port, ()=>{
    console.log(`The server is up and running on port ${port}`);
})