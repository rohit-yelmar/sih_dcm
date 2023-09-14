const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// @desc Register User
// @route POST /dcm/users/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
  // check if all the fields are
  const { firstname, lastname, username, email, password, phone } = req.body;
  if (!firstname || !lastname || !username || !email || !password) {
    res.status(400);
    throw new Error("Please fill all the mandatory fields");
  }

  // check if email is already registerd or not
  const userRegistered = await User.findOne({ email });
  if (userRegistered) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hashing the password
  const hashedPass = await bcrypt.hash(password, 10);

  // registering a user
  const user = new User.create({
    firstname,
    lastname,
    username,
    email,
    password: hashedPass,
    phone,
  });

  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data isn't valid!");
  }
});

// @desc Login User
// @route POST /dcm/users/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
  // check if the user has entered email & password
  const { email, password } = req.body;
  if (!email || !password) {
    throw new Error("Please check your credentials!");
  }
  // check if email is already registerd or not
  const user = await User.findOne({ email });

  // comparing the password & checking the user info
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          firstname: user.firstname,
          lastname: user.lastname,
          username: user.username,
          email: user.email,
          phone: user.phone,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN,
      { expiresIn: "60m" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Email or Password invalid!");
  }
});

// @desc User Profile
// @route GET /dcm/users/about
// @access private
const aboutUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = {
  registerUser,
  loginUser,
  aboutUser,
};
