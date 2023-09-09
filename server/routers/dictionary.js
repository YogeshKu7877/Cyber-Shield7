const express = require('express');
const mongoose = require('mongoose');
const DictModel = require('../models/Dictionary');

const router = express.Router();

// Fetching words from DataBase and send it into array format
router.get("/" , async (req , res) => {
    const words = await DictModel.find({});
    const arr = [];
    await words.map((word)=>{
        arr.push(word.word);
    })
    res.json({data : arr});
});

/* By using this request first add all restricted and abuses type words which are against the Internet policy such as : 

    "fuck", "jerk", "motherfucker", "sisterfucker", "bitch", "slut", "hentai", "milf", "asshole",
    "dick", "shit", "bastard", "bimbo", "twat", "damn", "dumb", "nerd", "ginger", "jock", "piss",
    "lame", "idiot", "fool", "retard", "loser", "rubbish", "shag", "wanker", "bollocks", "bugger",
    "choad", "crikey", "creepy", "weird"

*/

// router.post("/" , async (req , res) => {
//     const reqWord = req.body;
//     const newWord = new DictModel({word : reqWord.word});
//     await newWord.save();
//     res.json({message : "Success"});
// });


module.exports = router;