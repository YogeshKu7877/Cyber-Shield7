const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    toolName : {
        type : String,
        require : true
    },
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    comment : {
        type : String,
        require : true
    },
});

const ReviewModel = mongoose.model("reviews" , ReviewSchema);

module.exports = ReviewModel;