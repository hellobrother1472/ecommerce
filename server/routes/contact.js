const express = require('express');
const router = express.Router();
const Contact = require('../database/models/Contact');
const { body, validationResult } = require('express-validator');

router.post('/contact', [
    body('name', 'Enter a valid name and length must be more than 3').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('phone', 'Phone number cannot be blank').exists(),
    body('phone', 'Mobile number length must be 10').isLength({ min: 10, max: 10 }),
    body('message', 'Message cannot be blank').exists()
], async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }
    try{
        const {name, email, phone, message} = req.body;

        const contact = await Contact.create({
            name, email, phone, message
        })

        res.json({message: "Contact has been sent successfully", contact});
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;