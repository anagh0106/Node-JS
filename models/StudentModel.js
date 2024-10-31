const mongoose=require("mongoose")
const Schema = mongoose.Schema;

const Students = new Schema({
    rollno: {
        type: Number,
    },
    name: {
        type: String,
    },
    class: {
        type: String,
    },
    division: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
})

module.exports = mongoose.model("studentdata", Students)