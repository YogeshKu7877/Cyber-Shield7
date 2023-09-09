const mongoose = require('mongoose');

const DictSchema = new mongoose.Schema({
    word : {
        type : String,
        require : true
    }
});

const DictModel = mongoose.model("dictionaries" , DictSchema);

module.exports = DictModel;