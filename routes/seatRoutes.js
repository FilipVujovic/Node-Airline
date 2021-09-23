const express = require("express");
const router = express.Router();
const controllerImports = require("../util/controllerImports");
const { valiadteToken, isAdmin } = require("../controllers/authController");
const { check } = require("express-validator");

router.get(
  "/seats",
  controllerImports.seatController.getSeats
);

router.get(
  "/seatsbyflight/:flightId",
  controllerImports.seatController.getSeatsForFlight
);

router.post('/seatsForPackage', controllerImports.seatController.getSeatsForPackage)

router.put(
  "/seats/:seatId",
  controllerImports.seatController.updateSeat
);

router.delete(
  "/seats/:seatId",
  controllerImports.seatController.deleteSeat
);

module.exports = router;
