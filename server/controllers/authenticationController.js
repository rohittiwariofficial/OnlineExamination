var User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.verifyToken = function (req, res, next) {
  if (!req.headers.authorization) {
     return  res.status(401).json({
      code: 401,
      status:false,
      message: 'Unauthorized Request!',
      error: [
        err.message || "Some error occurred while token verification."
      ],
      data:[]
    });

  }
  let token = req.headers.authorization.split(" ")[1];
  if (token === "null") {
    return  res.status(401).json({
      code: 401,
      status:false,
      message: 'Unauthorized Request!',
      error: [
        err.message || "Some error occurred while token verification."
      ],
      data:[]
    });
  } else {
    //jwt.sign()
    let payload = jwt.verify(token, process.env.JWT_SECRET_KEY, (err, token1) => {
      if (err) {
        return  res.status(401).json({
          code: 401,
          status:false,
          message: 'Unauthorized Request!',
          error: [
            err.message || "Some error occurred while token verification."
          ],
          data:[]
        });
      } else {
        req.userId = token1.subject;
        next();
      }
    });
  }
};

exports.login = function (req, res) {
  let userData = req.body;
  if (!userData) {
    return res.status(500).json({
      code: 500,
      status:false,
      message: "login credential  can not be empty!",
      error: [
        "login credential can not be empty!"
      ],
      data:[]
    });
  }
  User.findOne({ email: userData.email },(err, data) => {
    if (err) {
      return res.status(401).json({
        code: 401,
        status:false,
        message: 'Email Id does not exist!',
        error: [
          err.message || "Email Id does not exist!"
        ],
        data:[]
      });
    }

    if ( data === null ) {
      return res.status(401).json({
        code: 401,
        status:false,
        message: 'Email Id does not exist!',
        error: [
          "Email Id does not exist!."
        ],
        data:[]
      });
    }

    if (data.password !== userData.password) {
      return res.status(401).json({
        code: 401,
        status:false,
        message: 'Invalid Password!',
        error: [
          "Invalid Password!"
        ],
        data:[]
      });
    }

    let payload = { subject: userData.email };
    let token = jwt.sign(payload, "secretKey");
    res.status(200).json({
      code: 200,
      status:true,
      message: 'Token created',
      error: [],
      data:{ token }
    });
  });

}
