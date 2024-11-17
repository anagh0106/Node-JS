const express = require("express")
const app = express()
const PORT = 3000

// DB Config
const dbconnection = require("./util/DB_Connection")
dbconnection.DbConnection();


// Router Config
app.use(express.json())
const user = require("./router/UserRouter")
const myrouter = require("./router/ProductRouter")
const myrouter1 = require("./router/CategoryRouter")
const empRouter = require("./router/EmployeeRouter")
const student = require("./router/Studentrouter")
const questionrouter = require("./router/QuestionRouter")
const examrouter = require("./router/ExamRouter")

app.use("/product", myrouter)
app.use("/category", myrouter1)
app.use("/employee", empRouter)
app.use("/users", user)
app.use("/student", student)
app.use("/question", questionrouter)
app.use("/exam", examrouter)

app.listen(PORT, (req, res) => {
    console.log(`Server Is Running on http://localhost:${PORT}`)
})