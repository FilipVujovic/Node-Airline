const Flight = require('../models/flight');

exports.addFlight = (req, res, next) => {
    Flight.create({
        departureDate: req.body.departureDate,
        departureTime: req.body.departureTime,
        arrivalDate: req.body.arrivalDate,
        arrivalTime : req.body.arrivalTime,
        departureAirport: req.body.departureAirport,
        airplaneId : req.body.airplaneId,
        destinationId : req.body.destinationId 
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