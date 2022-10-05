const express = require("express");
const router = express.Router();

// userSchema
const User = require("../models/User.js");

// GET all users
router.get("/", async (req, res) => {
  const allUsers = await User.find();

  try {
    res.json(allUsers); // send all users JSON
  } catch (err) {
    res.json({ message: err }); // send error JSON
  }
});

// POST new user
router.post("/create", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    contact: req.body.contact,
    dob: new Date(req.body.dob),
    address: req.body.address,
  });

  try {
    const savedUser = await user.save();
    res.json(savedUser); // send saved user JSON
  } catch (err) {
    res.json({ message: err }); // send error JSON
  }
});

module.exports = router;

/*
  POST create new User.
{
    "name": "test name",
    "address": "some address",
    "email": "test@test.test",
    "contact": 9090909090,
    "dob": "2002-07-20"
}
*/
