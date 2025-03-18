const mongoose = require("mongoose");

function connectDB() {
  try {
    mongoose.connect(process.env.MONGO_URI).then(() => {
      console.log("connected to database");
    });
  } catch (error) {
    console.log("Error:", error);
  }
}

module.exports = connectDB;
