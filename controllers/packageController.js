const Package = require('../models/package');

exports.addPackage = (req,res,next) => {
    Package.create({
        class: req.body.class,
        classPackage: req.body.classPackage
    }).then((result) => {
        console.log(result);
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
    })
};

exports.getPackages = (req, res, next) => {
    Package.findAll().then((packages) => {
        res.json(packages);
    }).catch((err) => {
    console.log(err);
});
};