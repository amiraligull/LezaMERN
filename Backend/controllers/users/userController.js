/** @format */

const { validationResult } = require("express-validator");
const UserModel = require("../../models/User");
const { hashPassword, createToken } = require("../../Services/authService");

//Route post/ api/ controller->register controller
// access public
//@desc Create a user and Return a Token
module.exports.registerController = async (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const { name, email, password } = req.body;

    try {
      // check if email already exsit
      const emailExist = await UserModel.findOne({ email });
      if (!emailExist) {
        //    now our password is hash by below   code
        const hashed = await hashPassword(password);
        //   now store the data
        const user = await UserModel.create({
          name: name,
          email: email,
          password: hashed,
        });

        const token = createToken({ id: user._id, name: user.name });
        return res
          .status(201)
          .json({ msg: "Your account has been created!", token });
      } else {
        // 401  error is used to show un authorized
        return res
          .status(401)
          .json({ errors: [{ msg: `${email} this email is already taken` }] });
      }
    } catch (error) {
      // 500 is the server error
      console.log(error.message);
      return res.status(500).json("server error");
    }
  } else {
    return res.status(400).json({ errors: errors.array() });
  }
};
