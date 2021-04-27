const Seat = require('../models/seat');

exports.getPackages = (req, res, next) => {
    Seat.findAll().then((seats) => {
        res.json(seats);
    }).catch((err) => {
    console.log(err);
});
};

exports.updateSeat = (req, res, next) => {
    Seat.findByPk(req.body.id)
    .then(seat => {
        seat.seatNumber = req.body.seatNumber;
        seat.rowNumber = req.body.rowNumber;
        seat.flightId = req.body.flightId;
        return seat.save();
    }).then(result => {
        console.log(result);
        res.sendStatus(200);
    }).catch(err => {
        console.log(err);
    }) 
};

exports.deleteSeat = (req, res, next) => {
    Seat.findByPk(req.body.id).then(seat => {
        seat.destroy();
    })
    .catch(err => {
        console.log(err);
    })
};