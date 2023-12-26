const jwt = require("jsonwebtoken");
// process.env.JWT_EXPIRE
const generateRefreshToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRE,
  });
};

module.exports = { generateRefreshToken };
