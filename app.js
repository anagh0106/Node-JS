const express = require("express")
const app = express()
const PORT = 3000
const persondata = require("./PersonData")


app.get("/Persondata", (req, res) => {
    console.log("Person Data Get API Invoked!.");
    res.status(200).json({
        Person_data: persondata.personArr,
        msg: "Data Executed Successfully!."
    })
}) // function is used to get the data from server


// console.log(persondata.getDataByID(5))


app.get("/Persondata/:id", (req, res) => {
    const p_id = persondata.personArr.find((person) => person.id == req.params.id)

    if (p_id) {
        res.status(200).json({
            Person_data: p_id
        })
    }
    else {
        res.status(404).json({
            msg: "Person not found with the given id"
        })
    }
})

app.listen(PORT, (req, res) => {
    console.log(`Server is running on http://localhost:${PORT}`)
})