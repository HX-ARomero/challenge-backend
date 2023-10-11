const { Sequelize } = require("sequelize");
require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;
const ProductModel = require("./models/Product");
const CategoryModel = require("./models/Category");

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    { logging: false}
);

//* Instanciando Modelos (Que formen parte de sequelize {})
ProductModel(sequelize);
CategoryModel(sequelize);

//* Cardinalidad N:N
// console.log(sequelize.models);
const { Category, Product } = sequelize.models;
Category.belongsToMany(Product, { through: "CategoryProducts"});
Product.belongsToMany(Category, { through: "CategoryProducts"});

module.exports = { sequelize, ...sequelize.models };