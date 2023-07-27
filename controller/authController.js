require("dotenv").config();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const saltRounds = 10;
const JWT = require("./JWTController")
const errorHander = require("../handler/error");

// ----------------------------------------------------Helper Functions-----------------------------------------------------

//check if a user is exists or not
const userExists = async (username) => {
  const isUser = await User.findOne({ username: username });
  return isUser;
};

// encrypt the password
const encryptPassword = async (password) => {
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
};

// compare the password to hashed password
const comparePassword = async (password, hash) => {
  const result = await bcrypt.compare(password, hash);
  return result;
};

// -----------------------------------------------------End of helper functions-------------------------------------------------

//------------------------------------------------Middleware for authorization and authentication checks---------------------------------------------

exports.isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.access;
    const refreshToken = req.cookies.refresh;
    if (!token && !refreshToken) {
      // res.status(403).json({ error: "Unverified user" });
      errorHander.handleUnauthorized(res);
      return;
    }
    let user = JWT.verifyToken(token);
    if (!user) {
      const access = await JWT.regenerateAccessToken(refreshToken);
      if (!access) {
        // res.status(403).json({ error: "Invalid Token" });
        errorHander.handleUnauthorized(res);
        return;
      }
      user = JWT.verifyToken(access);
      res.cookie("access", access, {
        httpOnly: true,
        maxAge: JWT.accessExpiry * 1000,
      });
      res.cookie("user", JSON.stringify(user), {
        httpOnly: false,
        maxAge: JWT.accessExpiry * 1000,
      });
    }
    req.user = await User.findById(user._id).select("-password");
    next();
  } catch (e) {
    errorHander.handleInternalServer(res);
  }
};

// --------------------------------------------------------End of Middleware----------------------------------------------------------

//---------------------------------------------------------Authentication Controllers-------------------------------------------------

exports.signup = async (req, res) => {
  try {
    if (
      !req.body.username ||
      !req.body.password
    ) {
      errorHander.handleBadRequest(res);
      // res.status(400).send({ message: "All fields is required" });
      return;
    }

    //Check if User is Already Exists
    const userName = await User.findOne({ username: req.body.username });
    if (userName)
      return errorHander.handleConflict(res, "Username already in use.");
    // return res
    //   .status(409)
    //   .send({ message: "User Already Exist. Please Login" });

    // If User is not already exist and all fields are valid then we will save the user in our database
    const newUser = new User({
      username: req.body.username,
      password: await encryptPassword(req.body.password),
    });
    await newUser.save();

    // Get JWT token
    const err = JWT.setCookies(res, newUser);
    if (err) throw err;
    res.status(200).json({ _id: newUser._id });
  } catch (e) {
    errorHander.handleInternalServer(res);
    // res.json({ error: e || "Someting went wrong" });
  }
};

exports.signin = async (req, res) => {
  try {
    if (!req.body.username || !req.body.password) {
      return errorHander.handleBadRequest(res);
      // res.status(400).send({ message: "All fields is required" });
    }

    // Check if a User exists or not
    const user = await userExists(req.body.email);

    //If user does not exists then throw error
    if (!user) return errorHander.handleNotFound(res, "Invalid Credentials");
    // return res
    //   .status(400)
    //   .send({ message: "User does not exists. Please Signup" });

    // Check the password is correct or not
    const compareHashedPassword = await comparePassword(
      req.body.password,
      user.password
    );
    if (!compareHashedPassword)
      return errorHander.handleBadRequest(res, "Invalid Credentials");
    // return res.status(400).send({ message: "Invalid Credentials" });
    //set a token
    const err = JWT.setCookies(res, user);
    if (err) throw err;
    // user.password = "";
    res.status(200).json({ _id: user._id });
  } catch (e) {
    res.json({ error: e || "Something went wrong" });
  }
};

exports.logout = (req, res) => {
  res.cookie("access", "", {
    httpOnly: true,
  });
  res.cookie("refresh", "", {
    httpOnly: true,
  });
  res.cookie("user", "", {
    httpOnly: false,
  });
  res.json({ success: "Logged out successfully." });
};

// -------------------------------------------------------------End of Authroization Controllers -----------------------------------------------------