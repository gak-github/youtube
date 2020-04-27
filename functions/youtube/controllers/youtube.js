const axios = require('axios');
const _get = require('lodash').get;
const ytData = require('../config/yt-data');
// const ytSearch = require('youtube-search');

// @desc get youtube videos for the tiven search term
// @route GET /api/v1/youtube
// @access Public
exports.getVideos = async (req, res, next) => {
  let testData = ytData();
  const KEY = process.env.YT_KEY;
  // if it is test environment then don't hit actual API to save the daily data limit
  if (!KEY) {
    return res.status(200).json({
      success: true,
      data: { isTestData: true, videos: testData }
    });
  }

  const youtubeApi = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3"
  });

  const term = req.query.search;
  try {
    const response = await youtubeApi.get("/search", {
        params: {
          q: term,
          part: "snippet",
          maxResults: 5,
          type: "video",
          key: KEY
        }
    });
  
    // let options = {
    //   maxResults: 5,
    //   key: KEY,
    //   part: snippet
    // };

    // const response = await ytSearch(term, options); // this can be used for debugging purpose instead of using axios
    return res.status(200).json({
      success: true,
      data: { isTestData: false, videos: _get(response, 'data.items') || [] }
    });
  } catch(error) {
    // TODO: if headers already sent check
    return res.status(200).json({ // send test data in case of error
      success: true,
      data: { isTestData: true, videos: testData }
    });
  }
};
