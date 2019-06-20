const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  username: { type: String,
              trim: true, 
              required: [true, "Please enter a username."],
              minlength: [4, "Username must be at least 4 characters"]
  },
  password: { type: String,
              trim: true,
              required: [true, "Please enter a password."],
              minlength: [4, "Password must be at least 4 characters"]
  },
  coasters: [
    {
      coaster: {
        // Store ObjectId 
        type: Schema.Types.ObjectId,
        // The ObjectIds will refer to the ids in the Coaster model
        ref: "Coaster"
      },
      // Store how many times the user has ridden this coaster
      numRides: Number
    }
  ]

});

// HLS add more password validation

const User = mongoose.model("User", UserSchema);

module.exports = User;
