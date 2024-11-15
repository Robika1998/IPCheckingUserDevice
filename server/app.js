const express = require("express");
const cors = require("cors");
const mongoose = require("./config/db");
const deviceRoutes = require("./routes/deviceRoutes");
const deviceHistoryRoutes = require("./routes/deviceHistoryRoutes");
const { updateDeviceStatuses } = require("./services/deviceService");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use("/devices", deviceRoutes);
app.use("/deviceHistories", deviceHistoryRoutes);

setInterval(updateDeviceStatuses, 5000);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
