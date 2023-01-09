const { Sequelize , DataTypes} = require('sequelize');


const sequelize = new Sequelize('jsdb', 'root', 'root', {
  host: 'localhost',
  dialect: "mariadb"
});

module.exports = {sequelize, DataTypes}