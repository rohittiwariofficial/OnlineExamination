const express = require("express");
const router = express.Router();

// Require controller modules.
const userController = require("../controllers/userController.js");
const authController = require("../controllers/authenticationController.js");
const userTypeController = require("../controllers/userTypeController.js");
router.get("/", (req, res) => {
  res.status(404).send("Not Found!");
});

// POST request for register new User.

//Auth APIs
router.post("/auth/login", authController.login);
router.get("/auth/logout/:id", authController.login);

//User Type APIs
router.post("/user_type/add", authController.verifyToken, userTypeController.add);
router.post("/user_type/view/:id", authController.verifyToken,userTypeController.view);
router.post("/user_type/delete/:id", authController.verifyToken, userTypeController.delete);
router.put("/user_type/update", authController.verifyToken, userTypeController.update);
router.get("/user_types", authController.verifyToken, userTypeController.userTypes);

//User APIs
router.post("/user/add", authController.verifyToken, userController.add);
router.post("/user/view/:id", authController.verifyToken, userController.view);
router.post("/user/delete/:id", authController.verifyToken, userController.delete);
router.put("/user/update", authController.verifyToken, userController.update);
router.get("/users", authController.verifyToken, userController.users);


//Question Level APIs
/* router.post("/question_level/add", authController.verifyToken, QuestionLevelController.registerUser);
router.post("/question_level/view/:id", authController.verifyToken, QuestionLevelController.registerUser);
router.post("/question_level/delete/:id", authController.verifyToken, QuestionLevelController.registerUser);
router.put("/question_level/update", authController.verifyToken, QuestionLevelController.registerUser);
router.get("/question_levels", authController.verifyToken, QuestionLevelController.getUsers); */


//Question Category APIs
/* router.post("/question_category/add", authController.verifyToken, QuestionCategoryController.registerUser);
router.post("/question_category/view/:id", authController.verifyToken, QuestionCategoryController.registerUser);
router.post("/question_category/delete/:id", authController.verifyToken, QuestionCategoryController.registerUser);
router.put("/question_category/update", authController.verifyToken, QuestionCategoryController.registerUser);
router.get("/question_categories", authController.verifyToken, QuestionCategoryController.getUsers); */

module.exports = router;
