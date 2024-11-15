const express = require("express");
const deviceController = require("../controllers/deviceController");

const router = express.Router();

router.post("/addDevice", deviceController.addDevice);
router.delete("/deleteDevice/:id", deviceController.deleteDevice);
router.put("/editDevice/:id", deviceController.editDevice);
router.get("/", deviceController.getDevices);

module.exports = router;
