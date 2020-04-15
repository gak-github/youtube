const mongoose = require("mongoose");

const YoutubeSchema = new mongoose.Schema({
  term: {
    type: String,
    trim: true,
    required: [true, "Please add search term"],
  }
});

module.exports = mongoose.model("Youtube", YoutubeSchema);