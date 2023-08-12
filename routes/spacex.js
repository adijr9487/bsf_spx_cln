const router = require("express").Router();
const authentication = require("../controller/authController");
const dataController = require("../controller/dataController");

//Get flight details
router.get("/pads/:flight_number", authentication.isAuthenticated, dataController.getLaunchByFlightNumber)

//Get all Launch Pads
router.get("/pads", authentication.isAuthenticated, dataController.getLaunchPadData)

//Get mission
router.get("/mission/:year/:status/:type/:site", authentication.isAuthenticated, dataController.getMission)


//Get history
router.get("/history", authentication.isAuthenticated, dataController.getLaunchHistory)