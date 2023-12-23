const jwt = require("jsonwebtoken");
// process.env.JWT_EXPIRE
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

module.exports = { generateToken };
