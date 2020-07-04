const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./router");
const mongoDBObj = require("./config/index");
const dotenv = require("dotenv");
const app = express();

//Enable CORS origin
app.use(cors());
dotenv.config();
//Create Restful Api for Routing (HttpGet, HttpPost, HttpDelete)
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

//Enable the body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(
  mongoDBObj.mongoDB.url,
  { useUnifiedTopology: true, useNewUrlParser: true },
  function (err) {
    if (err) {
      console.log("Not Connected");
    } else {
      console.log("Connected");
    }
  }
);

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/api", router);

app.listen(3001, () => {
  console.log(`server is running http://localhost:${3001}`);
});
