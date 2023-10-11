const { Product } = require("../db");

const putProduct = async (req, res) => {
    try {
        const { id } = req.params;
        //* req.body = { price: 5, stock: 20 }
        for(let key in req.body) {
            await Product.update( { [key]: req.body[key] }, { where: { id: id} } )
        }
        return res.status(200).json({message: "Product modified"});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

module.exports = putProduct;