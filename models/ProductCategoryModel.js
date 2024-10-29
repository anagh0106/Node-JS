const mongooes = require('mongoose')
const Schema = mongooes.Schema;

const productCategorySchema = new Schema({
    name: {
        type: String,
    }
}, {
    timestamps: true
})

module.exports = mongooes.model("category", productCategorySchema)