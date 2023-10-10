const { DataTypes } = require("sequelize")

const Product = (sequelize) => {
    sequelize.define("Product", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: DataTypes.TEXT,
            defaultValue: "No description"
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                min: 1
            }
        },
        stock: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            validate: {
                min: 0,
                isInt: true
            }
        },
        inOffer: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        image: {
            type: DataTypes.STRING,
            defaultValue: "https://www.bicifan.uy/wp-content/uploads/2016/09/producto-sin-imagen.png",
            validate: {
                isUrl: true
            }
        }
    },{
        timestamps: false
    })
}

module.exports = Product;