const User = require("../models/userModel");
const { generateToken } = require("../config/jwtToken");
const asyncHandler = require("express-async-handler");

//create a user
const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne({ email: email });

  if (!findUser) {
    //Create a new user
    const newUser = await User.create(req.body);
    res.json(newUser);
  } else {
    //User already exits
    throw new Error("User Already Exists");
  }
});

//login controller
const loginUserCtrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //check if user exist
  const findUser = await User.findOne({ email });
  if (findUser && (await findUser.isPasswordMatched(password))) {
    res.json({
      id: findUser?.id,
      firstname: findUser?.firstname,
      lastname: findUser?.lastname,
      email: findUser?.email,
      phone: findUser?.phone,
      token: generateToken(findUser?._id),
    });
  } else {
    throw new Error("Invalid Credinatial");
  }
  // console.log(email, password);
});

//update a user
const updatedUser = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      _id,
      {
        firstname: req?.body.firstname,
        lastname: req?.body.lastname,
        email: req?.body.email,
        phone: req?.body.phone,
      },
      {
        new: true,
      }
    );
    //console.log(updatedUser);
    res.json(updatedUser);
  } catch (error) {
    throw new Error(error);
  }
});

//Get all user
const getallUser = asyncHandler(async (req, res) => {
  try {
    const getUsers = await User.find();
    // console.log(getUsers);
    res.json(getUsers);
  } catch (error) {
    throw new Error(error);
  }
});

//Get single user
const getaUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getaUser = await User.findById(id);
    res.json({ getaUser });
  } catch (error) {
    throw new Error(error);
  }

  // console.log(id);
});

//Delete a user
const deleteaUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deleteaUser = await User.findByIdAndDelete(id);
    res.json({ deleteaUser });
  } catch (error) {
    throw new Error(error);
  }
  // console.log("delete : ".id);
});

module.exports = {
  createUser,
  loginUserCtrl,
  getallUser,
  getaUser,
  deleteaUser,
  updatedUser,
};
