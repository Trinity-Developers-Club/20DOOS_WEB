const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    length: 50,
  },
  address: {
    type: String,
    required: true,
    length: 200,
  },
  email: {
    type: String,
    required: true,
    length: 50,
  },
  contact: {
    type: Number,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
