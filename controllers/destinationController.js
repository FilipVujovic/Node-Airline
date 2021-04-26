const Destination = require('../models/destination');

exports.addDestination = (req, res, next) => {
    const airportCode = req.body.airportCode;
    const airportFullName = req.body.airportFullName;
    const countryCode = req.body.countryCode;
    Destination.create({
        airportCode: airportCode,
        airportFullName: airportFullName,
        countryCode: countryCode
    }).then(result => {
        console.log(result);
        res.sendStatus(200);
    }).catch(err => {
        console.log(err);
        res.sendStatus(300);
    })
};

exports.updateDestination = (req, res, next) => {
    Destination.findByPk(req.body.id)
    .then(destination => {
        destination.airportCode = req.body.airportCode;
        destination.airportFullName = req.body.airportFullName;
        destination.countryCode = req.body.countryCode;
        return destination.save();
    }).then(result => {
        console.log(result);
        res.sendStatus(200);
    }).catch(err => {
        console.log(err);
    }) 
}


exports.getDestinations = (req, res, next) => {
    Destination.findAll().then((destinations) => {
        res.json(destinations);
    }).catch((err) => {
    console.log(err);
});
};