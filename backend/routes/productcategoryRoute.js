const express = require("express");
const router = express.Router();
const {
  createproductCategory,
  updateproductCategory,
  deleteproductCategory,
  getproductCategory,
  getallproductCategory,
} = require("../controller/productcategoryCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, isAdmin, createproductCategory);
router.put("/:id", authMiddleware, isAdmin, updateproductCategory);
router.delete("/:id", authMiddleware, isAdmin, deleteproductCategory);
router.get("/:id", getproductCategory);
router.get("/", getallproductCategory);

module.exports = router;
