const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUserCtrl,
  loginAdminCtrl,
  getallUser,
  getaUser,
  deleteaUser,
  updatedUser,
  handleRefreshToken,
  logout,
  getWishlist,
} = require("../controller/userCtrl");

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.post("/admin-login", loginAdminCtrl);
router.get("/users", getallUser);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
//router.get("/:id", getaUser);
router.get("/:id([0-9a-fA-F]{24})", authMiddleware, isAdmin, getaUser);
router.delete("/:id", deleteaUser);
router.put("/edit-user", authMiddleware, updatedUser);
router.get("/wishlist", authMiddleware, getWishlist);

module.exports = router;
