var mongoose = require("mongoose");

// Get the Schema constructor
var Schema = mongoose.Schema;

// Using Schema constructor, create a UserTypeSchema
var UserTypeSchema = new Schema({
  name: {
    type: String,
  },
  status: {
    type: String,
    enum: ["ACTIVE", "INACTIVE"],
    default: "ACTIVE",
  },
  createdBy: {
    type: String,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

// Create model from the schema
var UserType = mongoose.model("UserType", UserTypeSchema);

// Export model
module.exports = UserType;
