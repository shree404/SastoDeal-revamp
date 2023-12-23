const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");

const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database error ", error);
  }
};

module.exports = dbConnect;
