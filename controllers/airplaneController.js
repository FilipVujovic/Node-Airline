const airplaneService = require("../services/airplaneService");
const { validationResult } = require("express-validator");

exports.addAirplane = (req, res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    return res.status(422).send("Validation failed!");
  }

  airplaneService
    .addAirplane(req.body)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      res.status(500).send("Internal server error: " + error);
    });
};

exports.getAirplaneById = async (req, res, next) => {
  const airplane = await airplaneService.getAirplaneById(req.body.id);
  if(airplane) {
    res.status(200).json(airplane);
  } else {
    res.status(404).send("No airplane found!");
  }
  res.status(500).send("Internal server error");
}

exports.getAirplanes = async (req, res, next) => {
  const result = await airplaneService.getAirplanes();
  if(result.length == 0) {
    res.status(404).send("No airplanes found!");
  } else if (result) {
    res.status(200).json(result);
  };
  res.status(500).send("Internal server error");
};

// exports.updateAirplane = (req, res, next) => {
//   Airplane.findByPk(req.body.id)
//     .then((airplane) => {
//       airplane.make = req.body.make;
//       airplane.model = req.body.model;
//       airplane.capacity = req.body.capacity;
//       return airplane.save();
//     })
//     .then((result) => {
//       console.log(result);
//       res.sendStatus(200);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.sendStatus(400);
//     });
// };

exports.deleteAirplane = async (req, res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty())
    return res.status(422).send("Validation failed!");

  airplaneService
    .deleteAirplane(req.body.id)
    .then((queryResult) => {
      res.status(204).json(queryResult);
    })
    .catch((err) => {
      if (err == "Error: Airplane does not exist!") {
        return res.status(422).send("Validation failed: Airplane not found!");
      } else if (err == "Error") {
        res.status(500).send("Internal server error: " + error);
      }
    });
};
