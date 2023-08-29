const mongoose = require("mongoose")
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
module.exports = mongoose.model("userinfo",schema)