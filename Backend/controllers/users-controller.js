const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const User = require("../models/user");

const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, '-password'); 
  } catch (err) {
    const error = new HttpError(
      'Fetching users failed, please try again',
      500
    );
    return next(error);
  }
    res.json({ users: users.map(user => user.toObject({ getters: true }))})
};

const signup = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors);
    return next(
      new HttpError(
        "Invalid inputs: Make sure your email and password meet minimum requirements"
      )
    );
  }

  const { name, email, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new Http("Sign up failed, please try again", 500);
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError(
      "User already exists, please try a different user name",
      422
    );
    return next(error);
  }

  const createdUser = new User({
    name,
    email,
    image:
      "https://cdn2.bulbagarden.net/upload/thumb/4/49/Ash_Pikachu.png/800px-Ash_Pikachu.png",
    password,
    places: [],
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError("Failed to create user", 500);
    return next(error);
  }

  res.status(201).json({ user: createdUser.toObject({ getters: true })});
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new Http("Login failed, please try again", 500);
    return next(error);
  }

  if(!existingUser || existingUser.password !== password) {
    const error = new HttpError(
      "Invalid credentials, could not log you in",
      401
    );
    return next(error)
  }
  res.json({ message: "Login Successful" });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;