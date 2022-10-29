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
        const { name, email, message,from } = req.body;

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
            to: "rishujain.rj08@gmail.com,hellobrother859@gmail.com", // list of receivers
            subject: `Message from ${name} (${email}) from ${from}`,
            html: `<b>${message}</b>`, // html body
        }, (err) => {
            if (err) {
                console.log(err.msg);
                res.json({ message: "Internal Server Error." });
            }
            else {
                res.json({ message: "Message has been sent successfully" });
            }
        });
        res.status(200).send({message:"Message Sent Succesfully."})
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;