const countryService = require("../services/countryService");
const { validationResult } = require("express-validator");

exports.addCountry = (req, res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    return res.status(422).send("Validation failed!");
  }

  countryService
    .addCountry(req.body)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(500).send("Internal server error: " + err.toString());
    });
};

exports.getCountries = async (req, res, next) => {
  const queryResult = await countryService.getCountries();
  if (queryResult.length == 0) {
    res.status(404).send("No countries found!");
  } else if (queryResult) {
    res.status(200).json(queryResult);
  }
  res.status(500).send("Internal server error");
};

// exports.updateCountry = (req, res, next) => {
//   Country.findByPk(req.body.id)
//     .then((country) => {
//       country.code = req.body.code;
//       country.fullName = req.body.fullName;
//       return country.save();
//     })
//     .then((result) => {
//       console.log(result);
//       res.sendStatus(200);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

exports.deleteCountry = (req, res, next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(422).send("Validation failed!");
  }
  countryService
    .deleteCountry(req.body.code)
    .then((result) => {
      res.status(204).json(result);
    })
    .catch((err) => {
      if (err == "Error: Country not found!") {
        return res.status(404).send(err.toString());
      } else if (err == "Error: Internal error!") {
        return res.status(500).send(err.toString());
      }
    });
};
