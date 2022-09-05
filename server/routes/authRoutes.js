const express = require('express');
const User = require('../database/models/User');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

// Create a User using: POST "/api/auth/signup". No login required
router.post('/signup', [
    body('name', 'Enter a valid name and length must be more thean 3').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
    body('number', 'Mobile number length must be 10').isLength({min: 10, max:10})

], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { name, email, password, number } = req.body;
        let success = false;
        const salt = bcrypt.genSaltSync(10);
        const secPass = bcrypt.hashSync(password, salt);
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ errors: errors.array() })
        }
        user = await User.create({
            name,
            email,
            password: secPass,
            number
        })
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success, authToken });
    }
    catch (err) {
        console.log(err.msg);
        res.status(500).send("Internal server error occured");
    }

}
)

router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let success = false;
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Please try to login with correct credentials' });
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }

        const data = {
            user: {
                id: user.id
            }
        }
        success = true;
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ success, authToken });
    }
    catch (err) {
        console.log(err.msg);
        res.status(500).send("Internal server error occured");
    }
})

module.exports = router;