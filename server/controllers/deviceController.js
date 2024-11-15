const Device = require("../models/Device");
const DeviceHistory = require("../models/DeviceHistory");

exports.addDevice = async (req, res) => {
  const { ipAddress, deviceName, userId } = req.body;
  try {
    const newDevice = new Device({
      ipAddress,
      deviceName,
      userId,
      online: false,
    });
    await newDevice.save();
    res.json(newDevice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteDevice = async (req, res) => {
  const { id } = req.params;
  try {
    await Device.findByIdAndDelete(id);
    await DeviceHistory.deleteMany({ deviceId: id });
    res.json({ message: "Device deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.editDevice = async (req, res) => {
  const { id } = req.params;
  const { ipAddress, deviceName, userId } = req.body;
  try {
    const updatedDevice = await Device.findByIdAndUpdate(
      id,
      { ipAddress, deviceName, userId },
      { new: true }
    );
    res.json(updatedDevice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDevices = async (req, res) => {
  try {
    const devices = await Device.find();
    res.json(devices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
