const express = require("express")
const router = express.Router()
const examController = require("../controller/ExamController")

router.post("/", examController.createExam)
router.get("/", examController.getExam)
router.put('/:examId/question/:questionId', examController.addQuestionToExam);

module.exports = router