const mongoose = require("mongoose")

// This is the schema of the user
const schema = new mongoose.Schema({
    name : String,
    age : Number,
    gender : String,
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    image : String
})

// This is model of that schema
module.exports = mongoose.model("userinfo",schema)