const express = require('express');
const User = require('../database/models/User');
const { body, validationResult, cookie } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const authentication = require("../middlewares/authentication");

const JWT_SECRET = process.env.JWT_SECRET;
const saltRounds = 10; // For Bcrypt

// Create a User using: POST "/api/auth/signup". No login required
router.post('/signup', [
    body('name', 'Enter a valid name and length must be more thean 3').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
    body('cpassword', 'cPassword cannot be blank').exists(),
    body('number', 'Mobile number length must be 10').isLength({ min: 10, max: 10 })
], async (req, res) => {

    const errors = validationResult(req); // Errors in given user's information

    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }
    try {
        const { name, email, number , password, cpassword,} = req.body;
        let user = await User.findOne({ email });

        // checking if the user already exists or not
        if (user) {
            return res.status(400).send({ result: "User already exists" })
        }
        else {
            // if not then we hash the password and store it.
            if (password === cpassword) {
                bcrypt.hash(password, saltRounds)
                    .then((hash) => {
                        const user = User.create({
                            name, email, password: hash,cpassword:hash, number
                        })
                        res.status(200).send({ result: "Registered succesfully" });

                    })
                    .catch((err) => {
                        console.log(err);
                        res.status(500).send({ error: "Internal Server Error" });
                    })
            }
            else {
                return res.status(400).json({ error: "Password and Confirm Password must be same" });
            }
        }
    }
    catch (err) {
        console.log(err.msg);
        res.status(500).send({ result: "Internal server error occured" });
    }

}
)

router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists()
], async (req, res) => {
    const errors = validationResult(req); // Errors in given user's information 
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email }); // Finding User
        if (!user) {
            return res.status(400).json({ error: 'Please try to login with correct credentials' });
        }

        // If user found
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }

        const data = {
            user: {
                id: user._id
            }
        }

        // Creating the authToken and sending the cookies.
        const authToken = jwt.sign(data, JWT_SECRET);
        res.cookie("jwt", authToken);
        if(email ===process.env.ADMIN){
            res.status(200).send({ result: "Admin" });
        }
        else{
            res.status(200).send({ result: "Login Successful" });
        }
    }
    catch (err) {
        console.log(err.msg);
        res.status(500).send("Internal server error occured");
    }
})

router.get("/authenticate",authentication,(req,res)=>{
    res.status(200).send({message:"User Successfully authenticated",user: req.user});
})

router.get("/logout", (req, res) => {
    res.clearCookie('jwt');
    console.log("cookies removed");
    res.status(200).send({ message: 'Succesfully logged out.' });
})

module.exports = router;