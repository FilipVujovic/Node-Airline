const Sequelize = require('sequelize');
var session = require("express-session");

const sequelize = new Sequelize('AvioKompanija', 'root', 'enterionwow1', {
dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;