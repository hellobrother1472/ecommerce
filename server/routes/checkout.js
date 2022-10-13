const express = require('express');
const Checkout = require('../database/models/Checkout');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const authentication = require('../middlewares/authentication');

router.post('/checkout', [
    body('firstName', 'Enter a valid name and length must be more than 3').isLength({ min: 3 }),
    body('lastName', 'Enter a valid name and length must be more than 3').isLength({ min: 3 }),
    body('address', 'Enter a valid address').exists(),
    body('phone', 'Phone number cannot be blank').exists(),
    body('phone', 'Mobile number length must be 10').isLength({ min: 10, max: 10 }),
    body('state', 'State cannot be blank').exists(), 
    body('district', 'District cannot be blank').exists(),
    body('addressType', 'Provide address type').exists(),
    authentication
],  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }
    try{
        const {firstName, lastName, address, phone, pincode, state, district, addressType, onChange} = req.body;
        const userId = req.user._id;

        const user = await Checkout.findOne({userId});
        if(onChange){
            if(user){
                let newCheckoutDetails = {firstName, lastName, address, phone, pincode, state, district, addressType};

                if(user.userId.toString() !== userId.toString()){
                    return res.status(401).send("Not Allowed");
                }

                await Checkout.updateOne({userId}, { $set: newCheckoutDetails }, { new: true })

                res.json({message: 'Data has been Changed successfully'});
                
            }
            else{
                let checkoutDetails = await Checkout.create({
                    userId:userId, firstName, lastName, address, phone, pincode, state, district, addressType
                });

                res.json({message: 'Checkout Details has been added succesfully'});
            }
        }
    }
    catch (err) {
        console.log(err.msg);
        res.status(500).send({ result: "Internal server error occured" });
    }
})

router.get('/userData', authentication, async (req, res) => {
    try{
        const userid = req.user._id;

        const user = await Checkout.findOne({userId: userid});
        if(user){
            return res.json({user, found: true});
        }
        else{
            return res.json({found: false});
        }
    }
    catch (err) {
        console.log(err.msg);
        res.status(500).send({ result: "Internal server error occured" });
    }
})

module.exports = router;