const express = require("express");
const router = express.Router();
const controllerImports = require("../util/controllerImports");
const { valiadteToken, isAdmin } = require("../controllers/authController");
const { check } = require("express-validator");

router.post(
  "/add-country",
  check("code").notEmpty().not(),
  check("fullName").notEmpty().not(),
  controllerImports.countryController.addCountry
);

router.get(
  "/countries",
  controllerImports.countryController.getCountries
);

router.delete(
  "/countries",
  check("code").notEmpty().not(),
  controllerImports.countryController.deleteCountry
);

module.exports = router;
