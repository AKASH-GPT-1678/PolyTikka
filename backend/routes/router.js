const express = require("express");
const {createPoliticians , getPoliticiansByName} = require("../controllers/createPolitician.js");
const {ratePolitician} = require("../controllers/ratingPoliticians.js");
const router = express.Router();


router.post("/addPoliticians" , createPoliticians);
router.get("/getPoliticiansByName/:name" , getPoliticiansByName);
router.get("/ratePoliticians/:rating" , ratePolitician);

module.exports = router