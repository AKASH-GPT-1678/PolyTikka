const express = require("express");
const {createPoliticians , getPoliticiansByName} = require("../controllers/createPolitician.js");
const {ratePolitician} = require("../controllers/ratingPoliticians.js");
const {registerUser, loginUser} = require("../controllers/registerUser.js");
const {getTrendingNews} = require("../controllers/trendingNews.js");
const router = express.Router();


router.post("/addPoliticians" , createPoliticians);
router.get("/getPoliticiansByName/:name" , getPoliticiansByName);
router.get("/ratePoliticians/:rating" , ratePolitician);
router.post("/register" , registerUser);
router.get("/login" , loginUser);
router.get("/getTrendingNews" , getTrendingNews);
module.exports = router