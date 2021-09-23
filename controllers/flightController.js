const Flight = require("../models/flight");
const Destination = require("../models/destination");
const flightService = require("../services/flightService");
const { validationResult } = require("express-validator");
const ITEMS_PER_PAGE = 6;

exports.addFlight = (req, res, next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(422).send("Validation failed!");
  }
  flightService
    .addFlight(req.body)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      if (err == "Error: Unknown destination!")
        res.status(404).send(err.toString());
      if (err == "Error: Unknown airplane!")
        res.status(404).send(err.toString());
      res.status(500).send("Internal server error: " + err.toString());
    });
};

exports.getFlightsByDateandDest = async(req,res,next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(422).send("Validation failed!");
  }

  flightService.getFlightsByDateandDest(req.body).then((result) => {
    res.status(200).json(result);
  })
}


exports.getFlightsByDestination = async (req, res, next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(422).send("Validation failed!");
  }

  const destination = await Destination.findOne({
    raw: true,
    where: {
      city: req.body.city
    }
  });

  if (destination) {
    const queryResult = await flightService.getFlightsByDestination(
      destination
    );
    if (queryResult.length == 0) {
      res.status(404).send("No flights found!");
    } else if (queryResult) {
      res.status(200).json(queryResult);
    }
  } else {
    res.status(404).send("No destination found!");
  }
  res.status(500).send("Internal server error");
};

exports.getAllFlights = async (req, res, next) => {
  const queryResult = await flightService.getFlights();
  if (queryResult.length == 0) {
    res.status(404).send("No flights found!");
  } else if (queryResult) {
    res.status(200).json(queryResult);
  }
  res.status(500).send("Internal server error");
};

exports.getFlights = async (req, res, next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(422).send("Validation failed!");
  }
  const queryResult = await flightService.getFlightsByPage(req.query.page);
  if (queryResult.length == 0) {
    res.status(404).send("No flights found!");
  } else if (queryResult) {
    res.status(200).json(queryResult);
  }
  res.status(500).send("Internal server error");
};

exports.getFlightsById = async (req, res, next) => {
  const queryResult = await flightService.getFlightsById(req.query.id);

  if (!queryResult) {
    res.status(404).send("No flights found!");
  } else if (queryResult) {
    res.status(200).json(queryResult);
  }
  res.status(500).send("Internal server error");
};

// exports.updateFlight = (req, res, next) => {
//   Flight.findByPk(req.body.id)
//     .then((flight) => {
//       (flight.departureDate = req.body.departureDate),
//         (flight.departureTime = req.body.departureTime),
//         (flight.arrivalDate = req.body.arrivalDate),
//         (flight.arrivalTime = req.body.arrivalTime),
//         (flight.departureAirport = req.body.departureAirport),
//         (flight.airplaneId = req.body.airplaneId),
//         (flight.destinationId = req.body.destinationId);
//       flight.departureCity = req.body.departureCity;
//       return flight.save();
//     })
//     .then((result) => {
//       console.log(result);
//       res.sendStatus(200);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.sendStatus(404);
//     });
// };

exports.deleteFlight = (req, res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty())
    return res.status(422).send("Validation failed!");
  
    flightService.deleteFlight(req.body.id).then((queryResult) => {
      res.status(204).json(queryResult);
    }).catch((err) => {
      if (err == "Error: No flight found!") {
        return res.status(404).send(err.toString());
      } else if (err == "Error") {
        res.status(500).send("Internal server error: " + error);
      }
    })
};
