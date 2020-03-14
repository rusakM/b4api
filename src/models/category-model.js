const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
    unique: true,
    trim: true
  }
});

const Category = new mongoose.model("Category", categorySchema);

module.exports = Category;
