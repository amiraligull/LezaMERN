/** @format */

const { body } = require("express-validator");
module.exports.registerValidator = [
  body("name").not().trim().isEmpty().escape().withMessage("name is required"),
  body("email").isEmail().trim().escape().withMessage("Email is required"),
  body("password")
    .trim()
    .isLength({ min: 5 })
    .escape()
    .withMessage("password should be 5 characters"),
];

// login validatoin
module.exports.loginValidator = [
  body("email").isEmail().trim().escape().withMessage("Email is required"),
  body("password").not().isEmpty().escape().withMessage("password Required"),
];
