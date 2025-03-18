const mongoose = require("mongoose");

const sensorSchema = new mongoose.Schema(
  {
    temp: String,
    fan: String,
    dayAndNight: String,
    flame: String,
  },
  { timestamps: true }
);

const SensorData = mongoose.model("sensor", sensorSchema);

module.exports = SensorData;
