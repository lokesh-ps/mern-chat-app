const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async () => {
  console.log("process.env.MONGO_URI", process.env.MONGO_URI);
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {});

    console.log(`Mongo DB connected: ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.log(`Error: ${err.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
