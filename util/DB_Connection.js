const mongooes = require("mongoose") // use to invoke MongoDB Library

const uri = "mongodb://localhost:27017/nodes" // URI Of DB To Communicate

const DbConnection = async (req, res) => {
    try {
        const Connection = await mongooes.connect(uri) // to establish the connection
        console.log("DB Connection Establish SuccessFully!");
    } catch (error) {
        console.log("The Error Is => ", error)
        return undefined
    }
}

module.exports = {
    DbConnection
}