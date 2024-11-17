const questionModel = require("../models/QuestionModel")

const CreateQuestion = async (req, res) => {
    try {
        const savedQuestion = await questionModel.create(req.body)

        if (savedQuestion) {
            res.status(200).json({
                message: "Question Added Successfully!",
                data: savedQuestion
            })
        }
        else {
            res.status(404).json({
                message: "Error to Add a Question",
                data: []
            })
        }
    } catch (error) {
        res.status(505).josn({
            message: "Error to Add a Question",
            data: []
        })
    }
}

const getAllQuestions = async (req, res) => {
    try {
        const getQuestion = await questionModel.find()

        if (getQuestion) {
            res.status(200).json({
                message: "All Questions Got Successfully!",
                data: getQuestion
            })
        }
        else {
            res.status(404).json({
                message: "Error to Get All Questions",
                data: []
            })
        }

    } catch (error) {
        res.status(505).json({
            message: "Error to Get All Questions",
            data: []
        })
    }
}

module.exports = {
    CreateQuestion,
    getAllQuestions,
}