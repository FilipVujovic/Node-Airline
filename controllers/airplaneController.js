const Airplane = require('../models/airplane');

exports.addAirplane = (req, res, next) => {
    const make = req.body.make;
    const model = req.body.model;
    const capacity = req.body.capacity;
    Airplane.create({
        make: make,
        model: model,
        capacity: capacity
    }).then(result => {
        console.log(result);
        res.sendStatus(200);
    }).catch(err => {
        console.log(err);
        res.sendStatus(300);
    })
};

exports.getAirplanes = (req, res, next) => {
    Airplane.findAll().then((airplanes) => {
        res.json(airplanes);
    }).catch((err) => {
    console.log(err);
});
};

exports.updateAirplane = (req, res, next) => {
    Airplane.findByPk(req.body.id)
    .then(airplane => {
        airplane.make = req.body.make;
        airplane.model = req.body.model;
        airplane.capacity = req.body.capacity;
        return airplane.save();
    }).then(result => {
        console.log(result);
        res.sendStatus(200);
    }).catch(err => {
        console.log(err);
    }) 
}