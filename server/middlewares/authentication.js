const jwt = require('jsonwebtoken');
const User = require("../database/models/User")

const authentication = async (req, res, next) => {
    try {
        // Getting the cookie data and verifing
        const token = req.cookies.jwt;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.user.id);

        if (!user) {
            res.status(401).send({ result: "User not found" })
            throw new Error("User not found");
        }

        req.user = user;
        next();
    } catch (error) {
        console.log(error.message);
        res.status(404).send({error:error.message});
    }

    try {

    } catch (error) {

    }
}

module.exports = authentication;