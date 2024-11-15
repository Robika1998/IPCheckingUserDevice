const ping = require("ping");
const Device = require("../models/Device");
const DeviceHistory = require("../models/DeviceHistory");

exports.updateDeviceStatuses = async () => {
  const devices = await Device.find();
  const now = new Date();

  devices.forEach(async (device) => {
    const response = await ping.promise.probe(device.ipAddress);

    if (response.alive) {
      if (!device.online) {
        device.online = true;
        device.startTime = now;
        device.endTime = null;
        await new DeviceHistory({
          deviceId: device._id,
          startTime: now,
        }).save();
      }
    } else {
      if (device.online) {
        device.online = false;
        device.endTime = now;
        await DeviceHistory.findOneAndUpdate(
          { deviceId: device._id, endTime: null },
          { endTime: now }
        );
      }
    }

    await device.save();
  });
};
