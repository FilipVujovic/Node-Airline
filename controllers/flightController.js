const Flight = require("../models/flight");
const Destination = require("../models/destination");
const ITEMS_PER_PAGE = 6;
exports.addFlight = (req, res, next) => {
  Flight.create({
    departureDate: req.body.departureDate,
    departureTime: req.body.departureTime,
    arrivalDate: req.body.arrivalDate,
    arrivalTime: req.body.arrivalTime,
    departureAirport: req.body.departureAirport,
    airplaneId: req.body.airplaneId,
    destinationId: req.body.destinationId,
    departureCity: req.body.departureCity,
  })
    .then((result) => {
      console.log(result);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(300);
    });
};

exports.getFlightsByDestination = (req, res, next) => {
  const city = req.query.city;
  console.log(city);
  Destination.findOne({
    raw: true,
    where: {
      city: city,
    },
  }).then((destination) => {
    console.log(destination.id);
    Flight.findAll({
      where: {
        destinationId: destination.id,
      },
    })
      .then((flights) => {
        res.json(flights);
      })
      .catch((err) => {
        res.sendStatus(404);
      });
  });
};

exports.getAllFlights = (req, res, next) => {
  const page = req.query.page;
  Flight.findAll({})
    .then((flights) => {
      res.json(flights);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getFlights = (req, res, next) => {
  const page = req.query.page;
  Flight.findAndCountAll({
    offset: (page - 1) * 6,
    limit: ITEMS_PER_PAGE,
  })
    .then((flights) => {
      res.json({
        flights : flights,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getFlightsById = (req, res, next) => {
  Flight.findByPk(req.params.flightId).then((flight) => {
    console.log(flight);
    res.json(flight);
  });
};

exports.updateFlight = (req, res, next) => {
  Flight.findByPk(req.body.id)
    .then((flight) => {
      (flight.departureDate = req.body.departureDate),
        (flight.departureTime = req.body.departureTime),
        (flight.arrivalDate = req.body.arrivalDate),
        (flight.arrivalTime = req.body.arrivalTime),
        (flight.departureAirport = req.body.departureAirport),
        (flight.airplaneId = req.body.airplaneId),
        (flight.destinationId = req.body.destinationId);
        (flight.departureCity = req.body.departureCity)
      return flight.save();
    })
    .then((result) => {
      console.log(result);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404);
    });
};
 
exports.deleteFlight = (req, res, next) => {
  Flight.findByPk(req.body.id)
    .then((flight) => {
      flight.destroy();
    })
    .then((response) => {
      console.log(response);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
    });
};
