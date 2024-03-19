const Products = require('../models/Product');
const {StatusCodes} = require('http-status-codes');

const createProduct = async(req, res) => {
    const product = await Products.create(req.body);
    res.status(StatusCodes.CREATED).json({product});
}

const getAllProducts = async(req, res) => {
    const products = await Products.find({});
    res.status(StatusCodes.OK).json({products});
}

module.exports = {
    createProduct, getAllProducts
}