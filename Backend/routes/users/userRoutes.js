/** @format */

const express = require("express");
const router = express.Router();
const {
  registerValidator,
  loginValidator,
} = require("../../validations/userValidations");
const {
  registerController,
  login,
} = require("../../controllers/users/userController");

// the below line contains api  route, controller, and validations as well
//  registerController is the function name
router.post("/register", registerValidator, registerController);
router.post("/login", loginValidator, login);

module.exports = router;
