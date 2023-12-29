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
  saveuserAddress,
  userCart,
  getUserCart,
  emptyCart,
} = require("../controller/userCtrl");

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.post("/admin-login", loginAdminCtrl);
router.post("/cart", authMiddleware, userCart);
router.get("/users", getallUser);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
//router.get("/:id", getaUser);
router.get("/:id([0-9a-fA-F]{24})", authMiddleware, isAdmin, getaUser);
router.delete("/:id([0-9a-fA-F]{24})", deleteaUser);
router.delete("/empty-cart", authMiddleware, emptyCart);
router.put("/edit-user", authMiddleware, updatedUser);
router.put("/save-address", authMiddleware, saveuserAddress);
router.get("/wishlist", authMiddleware, getWishlist);
router.get("/cart", authMiddleware, getUserCart);

module.exports = router;
