const express = require('express');
const mongoose = require('mongoose');

// Router
const signupRouter  = require('./routers/signup');
const signinRouter  = require('./routers/signin');

const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.use("/signup" , signupRouter);
app.use("/signin" , signinRouter);

mongoose.connect("mongodb+srv://Nikhil-sadhwani:multiWayCoder42@cluster0.61grdks.mongodb.net/hackathon?retryWrites=true&w=majority");

app.listen(3001 , ()=>{
    console.log("Server is running");
});