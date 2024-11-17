const mongoose = require("mongoose")
const schema = mongoose.Schema

const questionSchema = new schema({
    question: {
        type: String,
        required: true,
        unique: true
    },
    option1: {
        type: String,
        required: true
    },
    option2: {
        type: String,
        required: true
    },
    option3: {
        type: String,
        required: true
    },
    option4: {
        type: String,
        required: true
    },
    answer: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Question", questionSchema)