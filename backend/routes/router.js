const express = require("express");
const {createPoliticians , getPoliticiansByName} = require("../controllers/createPolitician.js");

const router = express.Router();


router.post("/addPoliticians" , createPoliticians);
router.get("/getPoliticiansByName/:name" , getPoliticiansByName);

module.exports = router