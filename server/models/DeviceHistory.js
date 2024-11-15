const mongoose = require("mongoose");

const deviceHistorySchema = new mongoose.Schema({
  deviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Device",
    required: true,
  },
  startTime: Date,
  endTime: Date,
});

module.exports = mongoose.model("DeviceHistory", deviceHistorySchema);
