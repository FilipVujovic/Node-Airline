const Flight = require('../models/flight');

exports.addFlight = (req, res, next) => {
    Flight.create({
        departureDate: req.body.departureDate,
        departureTime: req.body.departureTime,
        arrivalDate: req.body.arrivalDate,
        arrivalTime : req.body.arrivalTime,
        departureAirport: req.body.departureAirport,
        airplaneId : req.body.airplaneId,
        destinationId : req.body.destinationId,
        departureCity : req.body.departureCity
    }).then(result => {
        console.log(result);
        res.sendStatus(200);
    }).catch(err => {
        console.log(err);
        res.sendStatus(300);
    })
};

exports.getFlights = (req, res, next) => {
    Flight.findAll().then((flights) => {
        res.json(flights);
    }).catch((err) => {
    console.log(err);
});
};

exports.updateFlight = (req, res, next) => {
    Flight.findByPk(req.body.id)
    .then(flight => {
        flight.departureDate = req.body.departureDate,
        flight.departureTime = req.body.departureTime,
        flight.arrivalDate = req.body.arrivalDate,
        flight.arrivalTime = req.body.arrivalTime,
        flight.departureAirport = req.body.departureAirport,
        flight.airplaneId = req.body.airplaneId,
        flight.destinationId = req.body.destinationId 
        return flight.save();
    }).then(result => {
        console.log(result);
        res.sendStatus(200);
    }).catch(err => {
        console.log(err);
        res.sendStatus(404);
    }) 
};

exports.deleteFlight = (req, res, next) => {
    Flight.findByPk(req.body.id).then(flight => {
        flight.destroy();
    })
    .catch(err => {
        console.log(err);
    })
};