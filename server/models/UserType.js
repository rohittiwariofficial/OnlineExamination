var mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');

// Get the Schema constructor
var Schema = mongoose.Schema;

// Using Schema constructor, create a UserTypeSchema
var UserTypeSchema = new Schema({
  name: {
    type: String,
    unique: 'user type should be unique',
    required: 'user type should not be empty',
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
// Apply the uniqueValidator plugin to UserTypeSchema.
UserTypeSchema.plugin(uniqueValidator,{ message: 'Error, expected to be unique.' });

// Create model from the schema
var UserType = mongoose.model("UserType", UserTypeSchema);

// Export model
module.exports = UserType;
