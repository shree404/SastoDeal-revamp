const Coupon = require("../models/couponModel");
const validateMongoDbId = require("../utils/validateMongodbId");
const asynHandler = require("express-async-handler");

// create coupoon
const createCoupon = asynHandler(async (req, res) => {
  try {
    const newCoupon = await Coupon.create(req.body);
    res.json(newCoupon);
  } catch (error) {
    throw new Error(error);
  }
});

// get all coupoon
const getallCoupon = asynHandler(async (req, res) => {
  try {
    const allCoupon = await Coupon.find();
    res.json(allCoupon);
  } catch (error) {
    throw new Error(error);
  }
});

// update coupoon
const updateCoupon = asynHandler(async (req, res) => {
  const id = req.params.id;
  validateMongoDbId(id);
  try {
    const updatecoupon = await Coupon.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.json(updatecoupon);
  } catch (error) {
    throw new Error(error);
  }
});

// delete coupoon
const deleteCoupon = asynHandler(async (req, res) => {
  const id = req.params.id;
  validateMongoDbId(id);
  try {
    const deletecoupon = await Coupon.findByIdAndDelete({ _id: id });
    res.json(deletecoupon);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = { createCoupon, getallCoupon, updateCoupon, deleteCoupon };
