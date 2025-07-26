const express = require("express");
const {createPoliticians , getPoliticiansByName} = require("../controllers/createPolitician.js");
const {ratePolitician , topRatedPoliticians ,mostSearhchedPoliticians} = require("../controllers/ratingPoliticians.js");
const {registerUser, loginUser} = require("../controllers/registerUser.js");
const {getTrendingNews} = require("../controllers/trendingNews.js");
const {getPoliticalNews} = require("../controllers/newsArticles.js");
const router = express.Router();


router.post("/addPoliticians" , createPoliticians);
router.get("/getPoliticiansByName/:name" , getPoliticiansByName);
router.get("/ratePoliticians/:rating" , ratePolitician);
router.post("/register" , registerUser);
router.get("/login" , loginUser);
router.get("/getTrendingNews" , getTrendingNews);
router.get("/topPoliticians", topRatedPoliticians);
router.get("/mostSearchedPoliticians", mostSearhchedPoliticians);
router.get("/politicalNews" , getPoliticalNews);
module.exports = router