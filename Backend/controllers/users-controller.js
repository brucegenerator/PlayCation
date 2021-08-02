const { v4: uuidv4 } = require("uuid");
const HttpError = require("../models/http-error");
const DUMMY_USERS = [
  {
    id: "u1",
    name: "bruce generator",
    email: "test@test.com",
    password: "testers",
  },
];

const getUsers = (req, res, next) => {
  res.json({ users: DUMMY_USERS });
};

const signup = (req, res, next) => {
  const { name, email, password } = req.body;

  const hasUser = DUMMY_USERS.find((u) => u.email === email);
  if (hasUser) {
    next(new HttpError("Could not create user, email is already in use", 422));
  }

  const createdUser = {
    id: uuidv4(),
    name,
    email,
    password,
  };
  DUMMY_USERS.push(createdUser);
  res.status(201).json({ user: createdUser });
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  const identifiedUser = DUMMY_USERS.find((u) => u.email === email);
  if (!identifiedUser || identifiedUser.password !== password) {
    return next(
      new HttpError(
        "Could not find matching email or password, please try again",
        401
      )
    );
  }
  res.json({ message: "Login Successful" });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
