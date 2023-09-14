const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please enter your first name"],
      min: 2,
    },
    lastname: {
      type: String,
      required: [true, "Please enter your last name"],
      min: 2,
    },
    username: {
      type: String,
      required: [true, "Please enter your username"],
      min: 5,
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      max: 50,
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      min: 8,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.Schema("User", userSchema);
