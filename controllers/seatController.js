const Seat = require('../models/seat');

exports.getPackages = (req, res, next) => {
    Seat.findAll().then((seats) => {
        res.json(seats);
    }).catch((err) => {
    console.log(err);
});
};