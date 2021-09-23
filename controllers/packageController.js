const Package = require("../models/package");
const packageService = require("../services/packageService");
const { validationResult } = require("express-validator");

exports.addPackage = (req, res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    return res.status(422).send("Validation failed!");
  }

  packageService.addPackage(req.body).then((queryResult) => {
    return res.status(201).json(queryResult);
  }).catch((err) => {
    return res.status(500).send("Internal server error: " + error);
  })
};

exports.getPackages = async(req, res, next) => {
    const result = await packageService.getPackages();
    if(result.length == 0) {
      res.status(404).send("No airplanes found!");
    } else if (result) {
      res.status(200).json(result);
    };
    res.status(500).send("Internal server error");
};

exports.updatePackage = (req, res, next) => {
  Package.findByPk(req.body.id)
    .then((package) => {
      package.class = req.body.class;
      package.classPackage = req.body.classPackage;
      return flight.save();
    })
    .then((result) => {
      console.log(result);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deletePackage = (req, res, next) => {
  Package.findByPk(req.body.id)
    .then((package) => {
      package.destroy();
    })
    .catch((err) => {
      console.log(err);
    });
};
