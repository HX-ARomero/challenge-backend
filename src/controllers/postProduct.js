const productValidate = require("../functions/productValidate");
const { Product } = require("../db");

const postProduct = async (req, res) => {
    //* req.body = { name, description, ... }
    try {
        const message = productValidate(req.body);
        if(message) {
            return res.status(400).json({message: message});
        }
        const newProduct = await Product.create(req.body);
        await newProduct.addCategory(req.body.categories);
        return res.status(200).json(newProduct);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

module.exports = postProduct;