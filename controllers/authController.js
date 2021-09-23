const User = require("../models/user");
const authService = require("../services/authService");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");


exports.valiadteToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if(!token) return res.status(401).send("Authorization failed : No token found!");
  
  jwt.verify(token, "b5508b33965648eca9f41a78fddd0b4745d39def1f641aee61ea31db49388183", (err, user) => {
    if(!err) {
      req.user = user;
      next();
    } else {
      return res.status(401).send("Unauthorized!");
    }
  })
};

exports.isAdmin = (req, res, next) => {
  console.log(req.user);
  if(req.user && !req.user.role.admin) {
    return res.status(401).send("Unauthorized : You are not an admin!");
  } else {
    next();
  }
}

exports.postLogin = (req, res, next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty())
    return res.status(422).send("Validation failed!");
  authService
    .loginUser(req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      if (err == "Error: User not found!") {
        return res.status(404).send(err.toString());
      } else if (err == "Error: Password incorrect!") {
        return res.status(400).send(err.toString());
      }
    });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy();
  res.sendStatus(200);
};

exports.postSignUp = (req, res, next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty())
    return res.status(422).send("Validation failed!");

  authService
    .signupUser(req.body)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      if (err == "Error: User exists in the database!") {
        return res.status(422).send("Validation failed : " + err);
      } else {
        return res.status(500).send("Internal server error : " + err);
      }
    });
};
