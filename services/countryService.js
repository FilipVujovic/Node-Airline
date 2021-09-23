const Country = require("../models/country");

function getCountries() {
  return new Promise((resolve, reject) => {
    const queryResult = Country.findAll();
    if (queryResult) {
      resolve(queryResult);
    } else {
      reject(new Error("Error"));
    }
  });
}

function addCountry(countryInputData) {
  return new Promise((resolve, reject) => {
    const result = Country.create({
      code: countryInputData.code,
      fullName: countryInputData.fullName
    });
    if (result) resolve(result);
    reject(new Error("Internal error!"));
  });
}

function deleteCountry(code) {
  return new Promise((resolve, reject) => {
    const queryResult = Country.findByPk(code).then((country) => {
        if(!country) {
            reject(new Error("Country not found!"));
        } else {
            country.destroy();
            resolve(queryResult);
        }
    }).catch((err) => {
        reject(new Error(err.toString()));
    });
   
  });
}

module.exports.getCountries = getCountries;
module.exports.addCountry = addCountry;
module.exports.deleteCountry = deleteCountry;
