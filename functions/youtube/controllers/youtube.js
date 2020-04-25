const axios = require('axios');
const _get = require('lodash').get
// @desc get youtube videos for the tiven search term
// @route GET /api/v1/youtube
// @access Public
exports.getVideos = async (req, res, next) => {
  const KEY = process.env.YT_KEY || "AIzaSyAiWS2ZvLEtdRDTQjw4KwFOqOuY5qRO0fo";
  const youtubeApi = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3"
  });
  const term = req.query.search;
  try {
    const response = await youtubeApi.get("/search", {
        params: {
          q: term,
          part: "snippet",
          maxResults: 6,
          type: "video",
          key: KEY
        }
    });
    return res.status(200).json({
      success: true,
      data: _get(response, 'data.items') || []
    });
  } catch(error) {
    return res.send(500).json({
      success: false,
      error: error.message,
    });
  }
};
