const questioncontroller = require("../controller/QuestionController")
const express = require("express")
const router = express.Router()

router.get("/", questioncontroller.getAllQuestions)
router.post("/", questioncontroller.CreateQuestion)

module.exports = router