var express = require("express");
var router = express.Router();

var User = require("../models/user");

// GET all users
router.get("/", async function (req, res) {
  try {
    var users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "Error getting users",
      error: error.message,
    });
  }
});

// POST a new user
router.post("/", async function (req, res) {
  try {
    var user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
    });

    var savedUser = await user.save();

    res.status(201).json({
      message: "User saved successfully",
      user: savedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error saving user",
      error: error.message,
    });
  }
});

module.exports = router;
