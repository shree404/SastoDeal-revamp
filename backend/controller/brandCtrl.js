const Brand = require("../models/brandModel.js");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId.js");

//create Brand
const createBrand = asyncHandler(async (req, res) => {
  try {
    console.log(req.body);
    const newBrand = await Brand.create(req.body);
    res.json(newBrand);
  } catch (error) {
    throw new Error(error);
  }
});

//update Brand
const updateBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedBrand = await Brand.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedBrand);
  } catch (error) {
    throw new Error(error);
  }
});

//delete Brand
const deleteBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedBrand = await Brand.findByIdAndDelete(id);
    res.json(deletedBrand);
  } catch (error) {
    throw new Error(error);
  }
});

//get a single Brand
const getBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaBrand = await Brand.findById(id);
    res.json(getaBrand);
  } catch (error) {
    throw new Error(error);
  }
});

//get all Brand
const getallBrand = asyncHandler(async (req, res) => {
  try {
    const getBrand = await Brand.find();
    res.json(getBrand);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createBrand,
  updateBrand,
  deleteBrand,
  getBrand,
  getallBrand,
};
