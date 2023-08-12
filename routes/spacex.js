const router = require("express").Router();
const authentication = require("../controller/authController");
const dataController = require("../controller/dataController");

//Get flight details
router.post("/pads/:flight_number", authentication.isAuthenticated, dataController.getLaunchByFlightNumber)

//Get all Launch Pads
router.post("/pads", authentication.isAuthenticated, dataController.getLaunchPadData)

//Get mission
router.post("/mission/:year/:status/:type/:site/:search", authentication.isAuthenticated, dataController.getMission)

//Get history
router.post("/history", authentication.isAuthenticated, dataController.getLaunchHistory)

module.exports = router;