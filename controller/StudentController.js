const studentmodel = require("../models/StudentModel")

const addStudent = async (req, res) => {
    try {
        const addedStudent = await studentmodel.create(req.body);
        res.status(201).json({
            message: "Student added successfully",
            student: addedStudent
        })
    } catch (err) {
        res.status(404).json({
            message: "Error adding student",
        })
    }
}

const getAllStudent = async (req, res) => {
    try {
        const getStudent = await studentmodel.find()
        res.status(200).json({
            message: "Student retrieved successfully",
            student: getStudent
        })
    } catch (error) {
        res.status(404).json({
            message: "Error retrieving student",
        })
    }
}

const getStudentByID = async (req, res) => {
    const student = await studentmodel.findById(req.params.id);
    if (student && student != undefined) {
        res.status(200).json({
            message: "Student Filtered By Rollno successfully",
            data: student
        })
    }
    else {
        res.status(404).json({
            message: "Student Not Found"
        })
    }
}

const updateStudent = async (req, res) => {
    try {
        const id = req.params.id;
        const User = req.body;

        const updatedUser = await studentmodel.findByIdAndUpdate(id, User);
        res.status(200).json({
            message: "Student Updated Successfully",
            data: updatedUser
        })
    } catch (err) {
        res.status(404).json({
            message: "Error updating student",
        })
    }
}

const deleteStudent = async (req, res) => {
    try {
        const id = req.params.id;
        const user = req.body;

        const deletedUser = await studentmodel.findByIdAndDelete(id, user);
        res.status(200).json({
            message: "Student Deleted Successfully",
            data: deletedUser
        })
    } catch (err) {
        res.status(404).json({
            message: "Error deleting student",
        })
    }
}

const getStudentByRollno = async (req, res) => {
    try {
        const roll = req.params.rollno;
        const student = await studentmodel.find({ rollno: roll })

        res.status(200).json({
            message: "Student Found",
            data: student
        })
    } catch (error) {
        res.status(404).json({
            message: "Student Not Found"
        })
    }
}

module.exports = {
    addStudent,
    getAllStudent,
    getStudentByID,
    updateStudent,
    deleteStudent,
    getStudentByRollno,

}