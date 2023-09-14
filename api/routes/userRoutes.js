const express = require("express");
const { registerUser, loginUser, aboutUser } = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/about", validateToken, aboutUser);

module.exports = router;
