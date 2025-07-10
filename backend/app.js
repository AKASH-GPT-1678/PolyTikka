const express = require("express");
const app = express();

const router = require("./routes/router.js");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("Hello I am Ecommerce Server");
});



module.exports = app