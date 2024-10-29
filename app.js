const express=require("express")
const app=express()
const PORT=3000

// db config
const dbConnection = require("./util/DB_Connection")
dbConnection.DbConnection()


app.use(express.json());    //get the user data in req.body as json format
//Router
const myrouter=require("./router/UserRouter")
app.use("/users",myrouter)

app.get("/",(req,res)=>{
    res.json({
        msg:"Hello Guys This Is Home Page"
    })
})


app.listen(PORT,(req,res)=>{
    console.log(`Server Is Running On http://localhost:${PORT}`);
    
}) // it will listen those all activites on server