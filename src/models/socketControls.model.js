const mongoose = require("mongoose");

const socketSchema = new mongoose.Schema(
  {
    hour: String,
    second: String,
    mins: String,
    current: String,
    placeholder: String,
    peroid: String,
  },
  { timestamps: true }
);

const SocketData = mongoose.model("socket", socketSchema);

module.exports = SocketData;
