// This is the main file of node.js mongodb auth

// Requiring express
const express = require("express")
const app = express()

// Importing dotenv module for sercurity
require("dotenv").config()

// Configuration of browser post handle
app.use(express.json())
app.use(express.urlencoded({extended : false}))

// Connecting to the database
require("./db/connection")

// Importing signup routing
const signup = require("./routes/signup/signup")
app.use("/signup",signup)

// Home page routing
app.get("/",(req,res)=>{
    res.send("You are on HOME PAGE")
})

// Server listening
app.listen(process.env.PORT,()=>{
    console.log("Server Connected")
})