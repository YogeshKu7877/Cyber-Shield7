const express = require('express');
const mongoose = require('mongoose');
const DictModel = require('../models/Dictionary');

const router = express.Router();

router.get("/" , async (req , res) => {
    const words = await DictModel.find({});
    const arr = [];
    await words.map((word)=>{
        arr.push(word.word);
    })
    res.json({data : arr});
});

// For inserting words....
// router.post("/" , async (req , res) => {
//     const reqWord = req.body;
//     const newWord = new DictModel({word : reqWord.word});
//     await newWord.save();
//     res.json({message : "Success"});
// });


module.exports = router;