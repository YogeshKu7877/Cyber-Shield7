const express = require('express');
const mongoose = require('mongoose');
const ReportModel = require('../models/Reporting');

const router = express.Router();

router.post("/" , async (req , res) => {
    const report = req.body;
    const newReport = new ReportModel({email : report.email, report : report.report });
    await newReport.save();
    res.json({message : "Report Submitted"});
})

module.exports = router;
