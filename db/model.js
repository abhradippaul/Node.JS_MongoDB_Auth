const mongoose = require("mongoose")

// This is the schema of the user
const schema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : Number,
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

// This is model of that schema
module.exports = mongoose.model("userinfo",schema)