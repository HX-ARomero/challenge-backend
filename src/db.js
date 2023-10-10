const { Sequelize } = require("sequelize");
require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;
const ProductModel = require("./models/Product");

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    { logging: false}
);

ProductModel(sequelize);
// console.log(sequelize.models);

module.exports = { sequelize, ...sequelize.models };