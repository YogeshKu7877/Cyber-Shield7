const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserModel = require('../models/Users');

const router = express.Router();

router.post("/" , async (req , res) => {
    const user = req.body;
    const existUser = await UserModel.findOne({email : user.email});

    if(existUser){
        return res.json({message : "All ready exists"});
    }

    const hashedPassword = await bcrypt.hash(user.password , 10);
    const newUser = new UserModel({name : user.name  , email : user.email , password : hashedPassword});
    await newUser.save();

    return res.json({message : "Successfully Sign up"});
});

module.exports = router;