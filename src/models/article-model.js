const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    title: {
      required: [true, "not given title"],
      type: String,
      unique: true,
      trim: true,
    },
    category: {
      type: String,
      required: [true, "not given category"],
    },
    description: {
      type: String,
      trim: true,
      required: [true, "not given description"],
    },
    timestamp: {
      type: Date,
      default: Date.now(),
    },
    tags: {
      type: [String],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// articleSchema.virtual("photo").get(function () {
//   //const photoId = Math.floor(Math.random() * 4) + 1;
//   let photoId = 1;
//   let lastChar = this.id[this.id.length - 1];
//   if (lastChar > 3 && lastChar <= 7) {
//     photoId = 2;
//   } else if (
//     (lastChar > 7 && lastChar <= 9) ||
//     lastChar === "a" ||
//     lastChar === "b"
//   ) {
//     photoId = 3;
//   } else {
//     photoId = 4;
//   }
//   return `http://${process.env.ORIGIN}:${process.env.PORT}/uploads/images/${photoId}`;
// });
let photoNum = 1;
articleSchema.virtual("photo").get(function () {
  if (photoNum > 4) {
    photoNum = 1;
  }
  const photoId = photoNum;
  photoNum++;
  return `http://${process.env.ORIGIN}:${process.env.PORT}/uploads/images/${photoId}`;
});

const Article = new mongoose.model("Article", articleSchema);

module.exports = Article;
