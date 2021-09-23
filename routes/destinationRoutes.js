const express = require("express");
const router = express.Router();
const controllerImports = require("../util/controllerImports");
const { valiadteToken, isAdmin } = require("../controllers/authController");
const { check } = require("express-validator");

router.post(
  "/add-destination",
  check("airportCode").notEmpty().not(),
  check("airportFullName").notEmpty().not(),
  check("code").notEmpty().not(),
  check("city").notEmpty().not(),
  controllerImports.destinationController.addDestination
);

router.get(
  "/destinations",
  controllerImports.destinationController.getDestinations
);

router.get(
  "/destinations/:destinationId",
  controllerImports.destinationController.getDestinationsById
);

router.put(
  "/destinations/:destinationId",
  controllerImports.destinationController.updateDestination
);

router.delete(
  "/destinations/:destinationId",
  controllerImports.destinationController.deleteDestination
);

module.exports = router;
