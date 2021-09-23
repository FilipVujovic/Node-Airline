const Seat = require("../models/seat");
const seatService = require("../services/seatService");
exports.getSeats = async (req, res, next) => {
  const queryResult = await seatService.getSeats();
  if (queryResult.length == 0) {
    res.status(404).send("No seats found!");
  } else if (queryResult) {
    res.status(200).json(queryResult);
  }
  res.status(500).send("Internal server error");
};

exports.getSeatsForPackage = async (req, res, next) => {
  await seatService.getAvailableSeatForPackage(req.body).then((result) => {
    res.status(200).json(result);
  });
}


exports.getSeatsForFlight = async (req, res, next) => {
  const queryResult = await seatService.getSeatsForFlight(req.body.flightId);
  if (queryResult.length == 0) {
    res.status(404).send("No seats found!");
  } else if (queryResult) {
    res.status(200).json(queryResult);
  }
  res.status(500).send("Internal server error");
};

exports.updateSeat = (req, res, next) => {
  Seat.findByPk(req.body.id)
    .then((seat) => {
      seat.seatNumber = req.body.seatNumber;
      seat.rowNumber = req.body.rowNumber;
      seat.flightId = req.body.flightId;
      return seat.save();
    })
    .then((result) => {
      console.log(result);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteSeat = (req, res, next) => {
  Seat.findByPk(req.body.id)
    .then((seat) => {
      seat.destroy();
    })
    .catch((err) => {
      console.log(err);
    });
};
