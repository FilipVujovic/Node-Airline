const express = require("express");
const router = express.Router();
const controllerImports = require("../util/controllerImports");
const {valiadteToken, isAdmin} = require('../controllers/authController');
const { check } = require("express-validator");

router.post(
  "/add-airplane",
  check("make").notEmpty().not(),
  check("model").notEmpty().not(),
  check("capacity").notEmpty().not(),
  check("first").notEmpty().not(),
  check("buisness").notEmpty().not(),
  check("economy").notEmpty().not(),
  controllerImports.airplaneController.addAirplane
);

router.post('/airplaneById', controllerImports.airplaneController.getAirplaneById);

router.get("/airplanes", controllerImports.airplaneController.getAirplanes);

router.delete(
  "/airplanes/:airplaneId",
  check("id").notEmpty().not(),
  controllerImports.airplaneController.deleteAirplane
);

module.exports = router;
