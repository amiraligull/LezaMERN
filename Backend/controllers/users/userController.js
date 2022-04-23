/** @format */

const { validationResult } = require("express-validator");

module.exports.registerController = (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // return res.status(400).json({ errors: errors.array() });
    console.log(errors.array());
  } else {
    console.log(req.body);
  }
};
