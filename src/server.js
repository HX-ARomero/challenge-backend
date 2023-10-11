const express = require("express");
const morgan = require("morgan");
const producRouter = require("./routes/products");
const { Category } = require("../src/db");
const { Product } = require("../src/db");
const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use("/product", producRouter);

server.get("/", (req, res) => res.send("Server listening"));

server.post("/category", async (req, res) => {
    try {
        const newCategory = await Category.create(req.body);
        return res.status(200).json(newCategory);
    } catch (error) {
        return res.status(500).json(error);
    }
})

server.get("/category/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const products = await Category.findAll({
            where: { id: id },
            include: Product
        })
        res.json(products);
    } catch (error) {
        
    }
})

module.exports = server;