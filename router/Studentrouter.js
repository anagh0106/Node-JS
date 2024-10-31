const studentcontroller = require("../controller/StudentController")
const express = require("express")
const router = express.Router();

router.get("/", studentcontroller.getAllStudent)
router.post("/", studentcontroller.addStudent)
router.get("/:id", studentcontroller.getStudentByID)
router.put("/update/:id", studentcontroller.updateStudent)
router.delete("/delete/:id", studentcontroller.deleteStudent)
router.get("/get/:rollno", studentcontroller.getStudentByRollno)
module.exports = router