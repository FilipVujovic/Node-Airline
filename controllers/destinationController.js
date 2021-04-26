const Destination = require('../models/destination');

exports.addDestination = (req, res, next) => {
    const airportCode = req.body.airportCode;
    const airportFullName = req.body.airportFullName;
    const code = req.body.code;
    Destination.create({
        airportCode: airportCode,
        airportFullName: airportFullName,
        code: code
    }).then(result => {
        console.log(result);
        res.sendStatus(200);
    }).catch(err => {
        console.log(err);
        res.sendStatus(300);
    })
}


exports.getDestinations = (req, res, next) => {
    Destination.findAll().then((destinations) => {
        res.json(destinations);
    }).catch((err) => {
    console.log(err);
});
};