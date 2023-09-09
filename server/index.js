const express = require('express');
const mongoose = require('mongoose');

// Router
const signupRouter  = require('./routers/signup');
const signinRouter  = require('./routers/signin');
const dictionaryRouter  = require('./routers/dictionary');
const reviewRouter  = require('./routers/review');

const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.use("/signup" , signupRouter);
app.use("/signin" , signinRouter);
app.use("/dictionary" , dictionaryRouter);
app.use("/review" , reviewRouter);

mongoose.connect("mongodb+srv://Nikhil-sadhwani:multiWayCoder42@cluster0.61grdks.mongodb.net/hackathon?retryWrites=true&w=majority");

app.listen(3001 , ()=>{
    console.log("Server is running");
});