const mongoose = require("mongoose")
// Connecting to database
mongoose.connect(process.env.DB_URL)