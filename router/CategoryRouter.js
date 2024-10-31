const express=require("express")
const router=express.Router()
const productegory=require("../controller/CategoryController")

router.post("/add",productegory.addProductCategory);
router.get("/get",productegory.getAllProductCategory);

module.exports=router