const express = require("express");
const router = express.Router();
const {
  getVideos
} = require("../controllers/youtube");

router
  .route("/")
  .get(getVideos);

module.exports = router;
