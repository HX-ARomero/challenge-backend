const { DataTypes } = require("sequelize")

const Category = (sequelize) => {
    sequelize.define("Category", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },{
        timestamps: false
    })
}

module.exports = Category;