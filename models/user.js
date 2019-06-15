const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, 
              required: [true, "Please enter a username."],
              minlength: [4, "Username must be at least 4 characters"]
  },
  password: { type: String, 
              required: [true, "Please enter a password."],
              minlength: [4, "Password must be at least 4 characters"]
  }
});

// HLS add more password validation

const User = mongoose.model("User", userSchema);

module.exports = User;
