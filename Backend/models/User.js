/** @format */

const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  admin: {
    required: true,
    type: Boolean,
    default: false,
  },
});

// creating the name of the table below we need  add name in the model what we want in singular
// the mongoose make it palullar by own
const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;
