const express = require("express");
const router = express.Router();
const controllerImports = require("../util/controllerImports");
const { valiadteToken, isAdmin } = require("../controllers/authController");
const { check } = require("express-validator");

router.post(
  "/add-flight",
  check("departureDate").notEmpty().not(),
  check("departureTime").notEmpty().not(),
  check("arrivalDate").notEmpty().not(),
  check("arrivalTime").notEmpty().not(),
  check("departureAirport").notEmpty().not(),
  check("departureCity").notEmpty().not(),
  check("destinationId").notEmpty().not(),
  check("airplaneId").notEmpty().not(),
  controllerImports.flightController.addFlight
);

router.get("/flights", controllerImports.flightController.getFlights);

router.get(
  "/flightsByDestination/",
  check("city").notEmpty().not(),
  controllerImports.flightController.getFlightsByDestination
);

router.post('/flightsDestAndDate', controllerImports.flightController.getFlightsByDateandDest);

router.get("/allFlights", controllerImports.flightController.getAllFlights);

router.get("/flightById", controllerImports.flightController.getFlightsById);

// router.put("/updateFlight/", controllerImports.flightController.updateFlight);

router.delete(
  "/deleteFlight",
  controllerImports.flightController.deleteFlight
);

module.exports = router;
