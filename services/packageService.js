const Package = require("../models/package");

function addPackage(packageInputData) {
    return new Promise((resolve, reject) => {
        const package = Package.create({
            class: packageInputData.class,
            classPackage: packageInputData.classPackage
        });
        if(package) {
            resolve(package);
        } else {
            reject(new Error("Error"));
        }
    });
};
function getPackages() {
    return new Promise((resolve, reject) => {
        const queryResult = Package.findAll();
        if(queryResult) {
          resolve(queryResult);
        } else {
          reject(new Error("Error"));
        }
      });
}


module.exports.addPackage = addPackage;
module.exports.getPackages = getPackages;