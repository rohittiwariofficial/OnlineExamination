const express = require("express");
const router = express.Router();

// Require controller modules.
const userController = require("../controllers/userController.js");
const authController = require("../controllers/authenticationController.js");

router.get("/", (req, res) => {
  res.status(404).send("Not Found!");
});

// POST request for register new User.
router.post("/user/register", userController.registerUser);
router.get("/user/list", userController.getUsers);
router.post("/user/login", authController.login);

module.exports = router;
