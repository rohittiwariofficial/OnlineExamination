var User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.verifyToken = function (req, res, next) {
  if (!req.headers.authorization) {
     return  res.status(401).json({
      code: 401,
      status:false,
      message: 'Unauthorized Request.......',
      error: [
        err.message || "Some error occurred while creating the User."
      ],
      data:[]
    });

  }
  let token = req.headers.authorization.split(" ")[1];
  if (token === "null") {
    return  res.status(401).json({
      code: 401,
      status:false,
      message: 'Unauthorized Request.......',
      error: [
        err.message || "Some error occurred while creating the User."
      ],
      data:[]
    });
  } else {
    //jwt.sign()
    let payload = jwt.verify(token, "secretKey", (err, token1) => {
      if (err) {
        return  res.status(401).json({
          code: 401,
          status:false,
          message: 'Unauthorized Request.......',
          error: [
            err.message || "Some error occurred while creating the User."
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
  User.findOne({ email: userData.email }).then((err,data )=> {
    console.log(data);
    if (data==undefined) {
      res.status(401).json({
        code: 401,
        status:false,
        message: 'invalid username',
        error: [
          err.message || "Some error occurred while creating the User."
        ],
        data:[]
      });
    } else {
      if (data.password !== userData.password) {
        res.status(401).json({
          code: 401,
          status:false,
          message: 'invalid password',
          error: [
            err.message || "Some error occurred while creating the User."
          ],
          data:[]
        });
      } else {
        let payload = { subject: user._id };
        let token = jwt.sign(payload, "secretKey");
        res.status(200).json({
          code: 200,
          status:false,
          message: 'Token created',
          error: [],
          data:{ token }
        });

      }
    }
  })
  .catch(err => {
    res.status(500).json({
      code: 500,
      status:false,
      message: "some error occurred while login",
      error: [
        err.message || "Some error occurred while retrieving User."
      ],
      data:[]
    });
  });



};
