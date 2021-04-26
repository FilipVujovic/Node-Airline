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

exports.updateCountry = (req, res, next) => {
    Country.findByPk(req.body.id)
    .then(country => {
       country.code = req.body.code;
       country.fullName = req.body.fullName;
        return country.save();
    }).then(result => {
        console.log(result);
        res.sendStatus(200);
    }).catch(err => {
        console.log(err);
    }) 
}

