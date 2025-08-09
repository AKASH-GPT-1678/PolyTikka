const express = require("express");
const {createPoliticians , getPoliticiansByNam , getFullDetailsByName} = require("../controllers/createPolitician.js");
const {ratePolitician , topRatedPoliticians ,mostSearhchedPoliticians} = require("../controllers/ratingPoliticians.js");
const {registerUser, loginUser} = require("../controllers/registerUser.js");
const {getTrendingNews} = require("../controllers/trendingNews.js");
const {getPoliticalNews ,getNewsByCategory , getTopNewsByReads} = require("../controllers/newsArticles.js");
const {getMovieNews} = require("../controllers/movies.controller.js");
const router = express.Router();


router.post("/addPoliticians" , createPoliticians);
router.get("/getPoliticiansByName/:name" , getPoliticiansByNam);
router.post("/ratePoliticians/:politicianId" , ratePolitician);
router.post("/register" , registerUser);
router.get("/login" , loginUser);
router.get("/getTrendingNews" , getTrendingNews);
router.get("/topPoliticians", topRatedPoliticians);
router.get("/mostSearchedPoliticians", mostSearhchedPoliticians);
router.get("/politicalNews" , getPoliticalNews);
router.get("/getFullDetailsByName/:name" , getFullDetailsByName);
router.get("/getByCategory/:category" , getNewsByCategory);
router.get("/topReads" , getTopNewsByReads);
router.get("/movies" , getMovieNews);


module.exports = router;