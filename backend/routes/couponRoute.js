const express = require("express");
const router = express.Router();
const {
  createCoupon,
  getallCoupon,
  updateCoupon,
  deleteCoupon,
} = require("../controller/couponCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, isAdmin, createCoupon);
router.put("/:id", authMiddleware, isAdmin, updateCoupon);
router.delete("/:id", authMiddleware, isAdmin, deleteCoupon);
router.get("/", getallCoupon);

module.exports = router;
