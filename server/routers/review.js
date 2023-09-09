const express = require('express');
const mongoose = require('mongoose');
const ReviewModel = require('../models/Review');

const router = express.Router();

router.get("/:toolName" , async (req , res) => {
    const toolReviews = await ReviewModel.find({toolName : req.params.toolName});
    res.json({data : toolReviews});
})

router.post("/" , async (req , res) => {
    const review = req.body;
    const newReview = new ReviewModel({toolName : review.toolName , name : review.name , email : review.email , comment : review.comment});
    await newReview.save();
    res.json({message : "Successfully Submitted Review"});
});

module.exports = router;