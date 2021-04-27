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

exports.updateUser = (req, res, next) => {
    User.findByPk(req.body.id)
    .then(user => {
        user.firstName = req.body.firstName,
        user.lastName = req.body.lastName,
        user.jmbg = req.body.jmbg,
        user.adress = req.body.adress,
        user.contact = req.body.contact,
        user.email = req.body.email,
        user.password = req.body.password
        return user.save();
    }).then(result => {
        console.log(result);
        res.sendStatus(200);
    }).catch(err => {
        console.log(err);
    }) 
};


exports.deleteUser = (req, res, next) => {
    User.findByPk(req.body.id).then(user => {
        user.destroy();
    })
    .catch(err => {
        console.log(err);
    })
};