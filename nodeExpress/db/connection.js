const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('mini_reddit', 'abc', '1234', {
  host: '127.0.0.1',
  dialect: 'mysql',
  port:3306
});

module.exports = {
  sequelize,
  DataTypes
}
