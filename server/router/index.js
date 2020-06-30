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
router.post("/user_type/add", userTypeController.add);
router.post("/user_type/view/:id", userTypeController.view);
router.post("/user_type/delete/:id", userTypeController.delete);
router.put("/user_type/update", userTypeController.update);
router.get("/user_types", userTypeController.userTypes);

//User APIs
router.post("/user/add", userController.registerUser);
/* router.post("/user/view/:id", userController.registerUser);
router.post("/user/delete/:id", userController.registerUser);
router.put("/user/update", userController.registerUser);
router.get("/users", userController.getUsers); */


//Question Level APIs
/* router.post("/question_level/add", QuestionLevelController.registerUser);
router.post("/question_level/view/:id", QuestionLevelController.registerUser);
router.post("/question_level/delete/:id", QuestionLevelController.registerUser);
router.put("/question_level/update", QuestionLevelController.registerUser);
router.get("/question_levels", QuestionLevelController.getUsers); */


//Question Category APIs
/* router.post("/question_category/add", QuestionCategoryController.registerUser);
router.post("/question_category/view/:id", QuestionCategoryController.registerUser);
router.post("/question_category/delete/:id", QuestionCategoryController.registerUser);
router.put("/question_category/update", QuestionCategoryController.registerUser);
router.get("/question_categories", QuestionCategoryController.getUsers); */

module.exports = router;
