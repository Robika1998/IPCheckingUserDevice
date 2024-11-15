const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema({
  ipAddress: String,
  deviceName: String,
  online: Boolean,
  userId: String,
  startTime: Date,
  endTime: Date,
});

module.exports = mongoose.model("Device", deviceSchema);
