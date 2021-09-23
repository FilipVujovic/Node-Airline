const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();
const { check } = require("express-validator");

router.post(
  "/login",
  check("email").isEmail().notEmpty().not(),
  check("password").notEmpty().not(),
  authController.postLogin
);

router.post("/logout", authController.postLogout);

router.post(
  "/signup",
  check("firstName").notEmpty().not(),
  check("lastName").notEmpty().not(),
  check("jmbg").notEmpty().not(),
  check("adress").notEmpty().not(),
  check("contact").notEmpty().not(),
  check("password").notEmpty().not(),
  check("email").isEmail().notEmpty().not(),
  authController.postSignUp
);

module.exports = router;
