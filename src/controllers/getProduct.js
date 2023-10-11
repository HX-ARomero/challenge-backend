const { Product } = require("../db");

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const foundProduct = await Product.findByPk(id);
        if(foundProduct) {
            return res.status(200).json(foundProduct);
        }
        return res.status(404).json({message: "Product not found"});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

module.exports = getProduct;