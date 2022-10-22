const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const nodemailer = require("nodemailer");

router.post('/contact', [
    body('name', 'Enter a valid name and length must be more than 3').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('message', 'Message cannot be blank').exists()
], async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }
    try {
        const { name, email, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: "gmail",
            port: 465,
            host: 'smtp.gmail.com',
            auth: {
                user: process.env.ACCOUNT,
                pass: process.env.ACCOUNT_PASS,
            },
        });

        const info = await transporter.sendMail({
            from: `"CombPro App 👻" <${process.env.ACCOUNT}>`,
            to: "", // list of receivers
            subject: `Message from ${name} (${email})`,
            html: `<b>${message}</b>`, // html body
        }, (err) => {
            if (err) {
                console.log(err);
                res.json({ message: "Internal Server Error." });
            }
            else {
                console.log("Email sent");
                res.json({ message: "Message has been sent successfully" });
            }
        });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;