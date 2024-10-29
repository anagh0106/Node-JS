const express = require("express")
const app = express()
const PORT = 3000

// DB Config
const dbconnection = require("./util/DB_Connection")
dbconnection.DbConnection();


// Router Config
app.use(express.json())
const myrouter = require("./router/ProductRouter")
const myrouter1 = require("./router/CategoryRouter")
app.use("/product", myrouter)
app.use("/category", myrouter1)


app.listen(PORT, (req, res) => {
    console.log(`Server Is Running on http://localhost:${PORT}`)
})