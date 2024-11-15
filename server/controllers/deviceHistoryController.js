const DeviceHistory = require("../models/DeviceHistory");

exports.getDeviceHistories = async (req, res) => {
  try {
    const histories = await DeviceHistory.find();
    res.json(histories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
