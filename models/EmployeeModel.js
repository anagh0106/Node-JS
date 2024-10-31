const mongooes = require("mongoose")
const Schema = mongooes.Schema;

const EmployeeData = new Schema({
    name: {
        type: String
    },
    degree: [
        {
            name: {
                type: String
            },
            PassingYear: {
                type: Number
            }
        }
    ],
    status: {
        type: String,
        emp: ["Active", "Inactive", "Pending"]
    }
})

module.exports = mongooes.model("Employees", EmployeeData)