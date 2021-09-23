const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

function loginUser(userInputData) {
  return new Promise((resolve, reject) => {
    User.findOne({ where: { email: userInputData.email } })
      .then((user) => {
        bcrypt
          .compare(userInputData.password, user.password)
          .then((doMatch) => {
            if (doMatch) {
              if (userInputData.email.split("@")[1] == "admin.com") {
                resolve({
                  token: jwt.sign(
                    {
                      userInfo: userInputData.userInfo,
                      role: {
                        user: false,
                        admin: true
                      }
                    },
                    "b5508b33965648eca9f41a78fddd0b4745d39def1f641aee61ea31db49388183"
                  ),
                  isAdmin: true,
                  userId: user.id
                });
              } else {
                resolve({
                  token: jwt.sign(
                    {
                      userInfo: userInputData.userInfo,
                      role: {
                        user: true,
                        admin: false
                      }
                    },
                    "b5508b33965648eca9f41a78fddd0b4745d39def1f641aee61ea31db49388183"
                  ),
                  isAdmin : false,
                  userId: user.id
                });
              }
            } else {
              reject(new Error("Password incorrect!"));
            }
          });
      })
      .catch((err) => {
        reject(new Error("User not found!"));
      });
  });
}

function signupUser(userInputData) {
  return new Promise((resolve, reject) => {
    User.findOne({ where: { email: userInputData.email } }).then((user) => {
      if (user) reject(new Error("User exists in the database!"));
      bcrypt.hash(userInputData.password, 12).then((hashedPass) => {
        User.create({
          firstName: userInputData.firstName,
          lastName: userInputData.lastName,
          jmbg: userInputData.jmbg,
          adress: userInputData.adress,
          contact: userInputData.contact,
          email: userInputData.email,
          password: hashedPass
        })
          .then((result) => {
            resolve(result);
          })
          .catch((err) => {
            reject(new Error("Error"));
          });
      });
    });
  });
}

module.exports.signupUser = signupUser;
module.exports.loginUser = loginUser;
