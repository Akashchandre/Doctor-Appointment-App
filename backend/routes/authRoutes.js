const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");

const router = express.Router();

// POST /api/auth/signup - Register a new user
router.post("/signup", registerUser);

// POST /api/auth/login - Login an existing user
router.post("/login", loginUser);

module.exports = router;
