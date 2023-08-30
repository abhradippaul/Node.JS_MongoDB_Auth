const express = require("express")
const router = express.Router()
const model = require("../../db/model")

// Register router
router.post("/",async(req,res)=>{
    await model.collection.insertOne(req.body)
    console.log(req.body)
    res.send("Thank you for submitting your info")
})

module.exports = router