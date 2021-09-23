const Airplane = require("../models/airplane");

function addAirplane(inputData) {
  return new Promise((resolve, reject) => {
    const result = Airplane.create({
      make: inputData.make,
      model: inputData.model,
      capacity: inputData.capacity,
      firstClassCap: inputData.first,
      buisnessClassCap: inputData.buisness,
      economyClassCap: inputData.economy
    });
    if (result) {
      resolve(result);
    } else {
      reject(new Error("Error"));
    }
  });
}

function getAirplanes() {
  return new Promise((resolve, reject) => {
    const queryResult = Airplane.findAll();
    if(queryResult) {
      resolve(queryResult);
    } else {
      reject(new Error("Error"));
    }
    
  });
}

function getAirplaneById(airplaneId) {
  return new Promise((resolve, reject) => {
    const queryResult = Airplane.findByPk(airplaneId);
      if (!queryResult) {
        reject(new Error("Airplane does not exist!"));
      } else {
        resolve(queryResult);
      }
      reject(new Error("Error"));
    });
}

function deleteAirplane(airplaneId) {
  return new Promise((resolve, reject) => {
    const queryResult = Airplane.findByPk(airplaneId).then((airplane) => {
      if (!airplane) {
        reject(new Error("Airplane does not exist!"));
      } else {
        airplane.destroy();
        resolve(queryResult);
      }
      reject(new Error("Error"));
    });
  });
}
exports.addAirplane = addAirplane;
exports.getAirplanes = getAirplanes;
exports.deleteAirplane = deleteAirplane;
exports.getAirplaneById = getAirplaneById;
