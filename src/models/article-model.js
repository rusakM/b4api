const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: {
    required: [true, "not given title"],
    type: String,
    unique: true,
    trim: true
  },
  category: {
    type: String,
    required: [true, "not given category"]
  },
  description: {
    type: String,
    trim: true,
    required: [true, "not given description"]
  },
  timestamp: {
    type: Date,
    default: Date.now()
  },
  tags: {
    type: [String]
  }
});

const Article = new mongoose.model("Article", articleSchema);

module.exports = Article;
