const productCategoryModel = require("../models/ProductCategoryModel")

const addProductCategory = async (req, res) => {
    try {
        const createdCategory = await productCategoryModel.create(req.body);
        res.status(200).json({
            message: "Product Category Added Successfully",
            category: createdCategory
        })
    } catch (err) {
        res.status(404).json({
            message: "Failed to add product category",
        })
    }
}

const getAllProductCategory = async (req, res) => {
    try {
        const products = await productCategoryModel.find()
        res.status(200).json({
            message: "Product Categories Retrieved Successfully",
            categories: products
        })
    } catch (error) {
        res.status(404).json({
            message: "Product categories can't Be Retrived !"
        })
    }

}
module.exports = {
    addProductCategory,
    getAllProductCategory
}