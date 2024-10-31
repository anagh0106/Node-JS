const mongooes = require("mongoose")
const Schema = mongooes.Schema;

const productSchema = new Schema({
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
    },
    discount: {
        type: Number,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'category'
    },
    status: {
        type: Boolean,
        default: true
    }
})

module.exports = mongooes.model("products", productSchema)