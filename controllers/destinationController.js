const Destination = require("../models/destination");
const destinationService = require("../services/destinationService");
const { validationResult } = require("express-validator");

exports.addDestination = (req, res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    return res.status(422).send("Validation failed!");
  }

  destinationService
    .addDestination(req.body)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      if (err == "Error: Unknown country code!") {
        res.status(404).send(err.toString());
      }
      res.status(500).send("Internal server error: " + err.toString());
    });
};
exports.updateDestination = (req, res, next) => {
  Destination.findByPk(req.body.id)
    .then((destination) => {
      destination.airportCode = req.body.airportCode;
      destination.airportFullName = req.body.airportFullName;
      destination.countryCode = req.body.countryCode;
      return destination.save();
    })
    .then((result) => {
      console.log(result);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getDestinationsById = (req, res, next) => {
  Destination.findByPk(req.params.destinationId).then((destination) => {
    res.json(destination);
  });
};

exports.getDestinations = async (req, res, next) => {
  const queryResult = await destinationService.getDestinations();
  if (queryResult.length == 0) {
    res.status(404).send("No destinations found!");
  } else if (queryResult) {
    res.status(200).json(queryResult);
  };
  res.status(500).send("Internal server error");
};

exports.deleteDestination = (req, res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty())
    return res.status(422).send("Validation failed!");

  destinationService
    .deleteDestination(req.body.id)
    .then((queryResult) => {
      res.status(204).json(queryResult);
    })
    .catch((err) => {
      if (err == "Error: No destination found!") {
        return res.status(404).send("No destination found!");
      } else if (err == "Error") {
        res.status(500).send("Internal server error: " + error);
      }
    });
};
