const Sequelize = require('sequelize');

const sequelize = new Sequelize('AvioKompanija', 'root', 'enterionwow1', {
dialect: 'mysql', host: 'localhost'});



module.exports = sequelize;