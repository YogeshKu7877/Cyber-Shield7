const express = require("express");
const mongoose = require("mongoose");

// Router
const signupRouter = require("./routers/signup");
const signinRouter = require("./routers/signin");
const dictionaryRouter = require("./routers/dictionary");
const reviewRouter = require("./routers/review");
const reportRouter = require("./routers/reporting");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

//Use Routers
app.use("/signup", signupRouter);
app.use("/signin", signinRouter);
app.use("/dictionary", dictionaryRouter);
app.use("/review", reviewRouter);
app.use("/report", reportRouter);

//  Connecting MongoDB please enter your mongodb URL here and create collections of name : users , reviews , dictionaries , reports
mongoose.connect(
  "mongodb+srv://Cyber_user:poC158VetAfKK6qi@cluster0.5sbogkk.mongodb.net/?retryWrites=true&w=majority"
);

app.listen(3001, () => {
  console.log("Server is running");
});
