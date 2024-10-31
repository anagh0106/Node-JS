const express = require("express")
const router = express.Router();
const EmployeeController = require("../controller/EmployeeController")

router.post("/", EmployeeController.createEmployee)
router.get("/", EmployeeController.getAllEmployee)

module.exports = router