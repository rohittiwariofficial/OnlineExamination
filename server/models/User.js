var mongoose = require("mongoose");

// Get the Schema constructor
var Schema = mongoose.Schema;

// Using Schema constructor, create a UserSchema
var UserSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}",
  },
  mobile: {
    type: Number,
    required: true,
    pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}",
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    bsonType: String,
  },
  profileImg: {
    bsonType: String,
  },
  status: {
    type: String,
    enum: ["PENDING", "ACTIVE", "INACTIVE", "DELETED"],
    default: "PENDING",
  },
  createdBy: {
    type: String,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  userType: {
    type: Number,
    required: "UserType should not be blank!",
  },
});

// Create model from the schema
var User = mongoose.model("User", UserSchema);

// Export model
module.exports = User;
