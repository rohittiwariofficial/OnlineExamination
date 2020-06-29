var User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.verifyToken = function (req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized Request.......");
  }
  let token = req.headers.authorization.split(" ")[1];
  if (token === "null") {
    return res.status(401).send("Unauthorized Request");
  } else {
    //jwt.sign()
    let payload = jwt.verify(token, "secretKey", (err, token1) => {
      if (err) {
        return res.status(401).send("Unauthorized Request");
      } else {
        req.userId = token1.subject;
        next();
      }
    });
  }
};

exports.login = function (req, res) {
  let userData = req.body;
  User.findOne({ email: userData.email }, function (error, user) {
    if (error) {
      console.log("error");
    } else {
      if (!user) {
        res.status(401).send("invalid username");
      } else {
        if (user.password !== userData.password) {
          res.status(401).send("invalid password");
        } else {
          let payload = { subject: user._id };
          let token = jwt.sign(payload, "secretKey");
          res.status(200).send({ token });
        }
      }
    }
  });
};
