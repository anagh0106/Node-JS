const express = require("express")
const router = express.Router()
const productController = require("../controller/ProductController")

router.post("/add", productController.addProdcut)
router.get("/get", productController.getAllProduct)
router.get("/:id", productController.getProductById)
router.delete("/delete/:id", productController.deleteProductById)

module.exports = router