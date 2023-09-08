const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserModel = require('../models/Users');


const router = express.Router();

router.post("/" , async (req , res) => {
    const user = req.body;
    const existUser = await UserModel.findOne({email : user.email});

    if(!existUser){
        return res.json({message : "User Does Not Exists"});
    }

    const validPassword = await bcrypt.compare(user.password , existUser.password);

    if(!validPassword){
        return res.json({message : "Password is Incorrect"});
    }
    
    const token = jwt.sign({id : existUser._id} , "secret");
    return res.json({token , data : existUser , message : "User has Successfully loged in"});
});

module.exports = router;