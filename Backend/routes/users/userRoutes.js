/** @format */

const express = require("express");
const router = express.Router();
const { registerValidator } = require("../../validations/userValidations");
const {
  registerController,
} = require("../../controllers/users/userController");

// the below line contains api  route, controller, and validations as well
router.post("/register", registerValidator, registerController);
module.exports = router;
