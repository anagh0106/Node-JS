const examModel = require("../models/ExamModel")

const createExam = async (req, res) => {
    try {
        const createdExam = await examModel.create(req.body)
        res.status(200).json({
            message: "Exam created successfully",
            data: createdExam
        })
    } catch (error) {
        res.status(404).json({
            message: "Error creating exam",
            error: error.message
        })
    }
}

const getExam = async (req, res) => {
    try {
        const exams = await examModel.find().populate("Question");
        if (exams && exams.length > 0) {
            res.status(200).json({
                message: "All Exams",
                data: exams,
            });
        } else {
            res.status(200).json({
                message: "No exams found",
                data: [],
            });
        }
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}


const addQuestionToExam = async (req, res) => {
    const examId = req.params.examId
    const questionId = req.params.questionId

    try {
        const exam = await examModel.findByIdAndUpdate(examId, {
            $push: { questions: questionId }
        });
        res.status(200).json({
            message: "Question added to exam",
            data: exam,
        });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}
module.exports = {
    createExam,
    getExam,
    addQuestionToExam
}