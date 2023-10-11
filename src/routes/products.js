const { Router } = require("express");
const postProduct = require("../controllers/postProduct");
const getProduct = require("../controllers/getProduct");
const deleteProduct = require("../controllers/deleteProduct");
const putProduct = require("../controllers/putProduct");
const producRouter = Router();

producRouter.post("/", postProduct);
producRouter.get("/:id", getProduct);
producRouter.delete("/:id", deleteProduct);
producRouter.put("/:id", putProduct);

module.exports = producRouter;