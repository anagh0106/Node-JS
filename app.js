const express=require("express")
const app=express()
const PORT=3000

const dbconnection=require("./DB Connection/DB_Connection")

dbconnection.connection()

app.get("/",(req,res)=>{
    res.json("Home Page")
})


app.listen(PORT,(req,res)=>{
    console.log(`Server Is Live On http://localhost:${PORT}`)
})

