const mongoose = require('mongoose');
require("dotenv").config();

const dbUrl = process.env.DB_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl);
        console.log("Database connected!")
    } catch (err) {
        console.log(`Database connection failed ${err.message}`)
        process.exit(1)
    }
}

module.exports = connectDB;