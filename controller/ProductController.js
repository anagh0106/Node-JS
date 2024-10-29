const productModel = require("../models/ProductModel")

const addProdcut = async (req, res) => {
    try {
        const product = await productModel.create(req.body)
        res.status(200).json({
            message: "Product Added Successfully!",
            products: product
        })
    } catch (err) {
        res.status(404).json({
            message: "Product is not Added"
        })
    }
}

const getAllProduct = async (req, res) => {
    const product = await productModel.find({ status: true }).populate('category')

    try {
        res.status(200).json({
            message: "Product Lists : ",
            data: product
        })
    } catch (err) {
        res.status(404).json({
            message: "Error To Find All Products"
        })
    }
}

const getProductById = async (req, res) => {
    try {
        const user = await productModel.findById(req.params.id)
        if (user || user != undefined) {
            res.status(200).json({
                message: "Product Details : ",
                data: user
            })
        }
    } catch (err) {
        res.status(404).json({
            message: "Error To Find Product By Id"
        })
    }
}

const deleteProductById = async (req, res) => {

    const id = req.params.id;
    const product = req.body;

    const deletedProduct = await productModel.findByIdAndDelete(id, product)
    if (deletedProduct || deletedProduct != undefined) {
        res.status(200).json({
            message: "Product Deleted Successfully!",

        })
    }
    else {
        res.status(404).json({
            message: "Error To Delete Product By Id"
        })
    }
}
module.exports = {
    addProdcut,
    getAllProduct,
    getProductById,
    deleteProductById
}