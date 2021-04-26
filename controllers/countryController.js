const Country = require('../models/country');

exports.addCountry = (req, res, next) => {
    const code = req.body.code;
    const fullName = req.body.fullName;
    Country.create({
        code: code,
        fullName: fullName
    }).then(result => {
        console.log(result);
        res.sendStatus(200);
    }).catch(err => {
        console.log(err);
        res.sendStatus(300);
    })
};

exports.getCountries = (req, res, next) => {
    Country.findAll().then((countries) => {
        res.json(countries);
    }).catch((err) => {
    console.log(err);
});
};

