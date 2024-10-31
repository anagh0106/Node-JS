const EmployeeModel = require("../models/EmployeeModel")

const createEmployee = async (req, res) => {
    try {
        const createdEmployee = await EmployeeModel.create(req.body)

        res.status(201).json({
            message: "Employee Created Successfully",
            Data: createdEmployee
        })
    } catch (error) {
        res.status(404).json({
            message: "Error To Create Employee Data"
        })
    }
}

const getAllEmployee = async (req, res) => {
    try {
        const employees = await EmployeeModel.find()

        res.status(200).json({
            message: "Employees Data Fatched Successfully!",
            data: employees
        })
    } catch (error) {
        res.status(404).json({
            message: "Unable to get employee data"
        })
    }
}

module.exports = {
    createEmployee,
    getAllEmployee
}