const Sequelize = require("sequelize");
require("dotenv").config();

//Passing parameters separately (other dialects)
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    // disable logging; default: console.log
    logging: false,
    dialect: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
  }
);

module.exports = sequelize;
