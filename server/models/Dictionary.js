const mongoose = require('mongoose');

const DictSchema = new mongoose.Schema({
    word : {
        type : String
    }
});

const DictModel = mongoose.model("dictionary" , DictSchema);

module.exports = DictModel;