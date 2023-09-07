import User from "../models/User.js";
import asyncHandler from "express-async-handler";

const getUser = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  res.status(200).json(user);
});

module.exports = {
  getUser,
};
