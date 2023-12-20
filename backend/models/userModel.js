// Model File

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

// Declare the Schema of the Mongo model
const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
});

// encrypt the password
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSaltSync(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// match the password
userSchema.methods.isPasswordMatched = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Export the model
const User = mongoose.model("User", userSchema);
module.exports = User;
