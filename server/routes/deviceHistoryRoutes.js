const express = require("express");
const deviceHistoryController = require("../controllers/deviceHistoryController");

const router = express.Router();

router.get("/", deviceHistoryController.getDeviceHistories);

module.exports = router;
