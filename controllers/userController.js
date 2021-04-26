const User = require('../models/user');

exports.addUser = (req,res,next) => {
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        jmbg: req.body.jmbg,
        adress: req.body.adress,
        contact: req.body.contact,
        email: req.body.email,
        password: req.body.password
    }).then((result) => {
        console.log(result);
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
    })
}

exports.getUsers = (req, res, next) => {
    User.findAll().then((user) => {
        res.json(user);
    }).catch((err) => {
    console.log(err);
});
};