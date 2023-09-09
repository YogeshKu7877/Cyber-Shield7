const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
    email :{
        type : String,
        require : true
    },
    report :{
        type : String,
        require : true
    }
});

const ReportModel = mongoose.model("reports" , ReportSchema);

module.exports = ReportModel;