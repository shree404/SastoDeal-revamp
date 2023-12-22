const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUserCtrl,
  getAllUser,
} = require("../controller/userCtrl");

router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.get("/users", getAllUser);

module.exports = router;
