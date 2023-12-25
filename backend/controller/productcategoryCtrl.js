const Category = require("../models/productcategoryModel.js");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId.js");

//create category
const createproductCategory = asyncHandler(async (req, res) => {
  try {
    console.log(req.body);
    const newCategory = await Category.create(req.body);
    res.json(newCategory);
  } catch (error) {
    throw new Error(error);
  }
});

//update category
const updateproductCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedCategory = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedCategory);
  } catch (error) {
    throw new Error(error);
  }
});

//delete category
const deleteproductCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedCategory = await Category.findByIdAndDelete(id);
    res.json(deletedCategory);
  } catch (error) {
    throw new Error(error);
  }
});

//get a single category
const getproductCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaCategory = await Category.findById(id);
    res.json(getaCategory);
  } catch (error) {
    throw new Error(error);
  }
});

//get all category
const getallproductCategory = asyncHandler(async (req, res) => {
  try {
    const getCategory = await Category.find();
    res.json(getCategory);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createproductCategory,
  updateproductCategory,
  deleteproductCategory,
  getproductCategory,
  getallproductCategory,
};
