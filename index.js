// This is the main file of node.js mongodb auth
// Requiring express
const express = require("express")
const app = express()
require("dotenv").config()

// Home page routing
app.get("/",(req,res)=>{
    res.send("You are on HOME PAGE")
})

// Server listening
app.listen(process.env.PORT,()=>{
    console.log("Server Connected")
})