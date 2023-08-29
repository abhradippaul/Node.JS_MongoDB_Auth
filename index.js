const express = require("express")
const app = express()
require("dotenv").config()

app.get("/",(req,res)=>{
    res.send("You are on HOME PAGE")
})

app.listen(process.env.PORT,()=>{
    console.log("Server Connected")
})