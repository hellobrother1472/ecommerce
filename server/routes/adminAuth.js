const express = require("express")
const { body, validationResult } = require('express-validator');
const router = express.Router();
const jwt = require("jsonwebtoken");
const Admin = require("../database/models/Admin");
const bcrypt = require("bcrypt");
const adminAuthentication = require("../middlewares/adminAuthentication");

const saltRounds = 10;
const JWT_ADMIN_SECRET = process.env.JWT_ADMIN_SECRET;

// Authenticate admin using: POST "/api/admin/auth/login".
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
    body('secret', 'Secret cannot be blank').exists()
], async (req, res) => {
    const errors = validationResult(req); // Errors in given admin's information

    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }
    else {
        try {
            const { email, password, secret } = req.body;
            const admin = await Admin.findOne({ email });
            if (!admin) {
                res.status(400).send({ error: "Admin does'nt exists" });
            }

            // comparing the password and secret
            const passwordCompare = await bcrypt.compare(password, admin.password);
            const secretCompare = await bcrypt.compare(secret, admin.secret);

            if (!passwordCompare) {
                res.status(400).send({ error: "Admin does'nt exists" });
            }
            // if password is authenticated then authenticate secret
            if (!secretCompare) {
                res.status(400).send({ error: "Admin does'nt exists" });
            }

            // after both authentication
            const data = {
                admin: {
                    id: admin._id
                }
            }
            // creating the authToken and sending in the cookies
            const authToken = jwt.sign(data, JWT_ADMIN_SECRET);
            res.cookie("jwt", authToken);
            res.status(200).send({ result: "Login Successful" });

        } catch (error) {
            console.log(error);
        }
    }
})

router.post("/addAdmin", [
    body('name', 'Enter a valid name and length must be more thean 3').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
    body('secret', 'secret cannot be blank').exists(),
    adminAuthentication
], async (req, res) => {
    const errors = validationResult(req); // Errors in given admin's information

    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }
    else {
        try {
            const { name, email, password, secret } = req.body;
            const admin = await Admin.findOne({ email });
            if (admin) {
                res.status(400).send({ error: "Admin already exists" });
            }

            // hashing password and secret
            const hashPassword = await bcrypt.hash(password, saltRounds);
            const hashSecret = await bcrypt.hash(secret, saltRounds);

            // checking if the hashed version of both is present or not
            if (!hashPassword || !hashSecret) {
                console.log("This error");
                res.status(500).send({ error: "Internal Server Error" });
            }

            // after all the checks we finally creates a newAdmin in our DataBase
            const newAdmin = await Admin.create({
                name, email, password: hashPassword, secret: hashSecret
            })

            res.status(200).send({ result: "Registered succesfully" });

        } catch (error) {
            console.log(error);
            res.status(500).send({ result: "Internal server error occured" });
        }

    }
})

router.get("/addAdmin",adminAuthentication,(req,res)=>{
    res.status(200).json({result:"Admin verified"});
})

module.exports = router