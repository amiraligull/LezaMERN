/** @format */

const express = require("express");
const router = express.Router();
const { registerValidator } = require("../../validations/userValidations");
const {
  registerController,
} = require("../../controllers/users/userController");

router.post("/register", registerValidator, registerController);
module.exports = router;
