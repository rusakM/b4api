const Article = require("../models/article-model");
const Fetures = require("../utils/api-features");

exports.getArticles = async (req, res) => {
  try {
    const features = new Fetures(Article.find(), req.query)
      .filter()
      .sort()
      .limitFields();
    const articles = await features.query;
    res.status(200).json({
      status: "success",
      results: articles.length,
      data: articles
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

exports.getArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        article
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

exports.addArticle = async (req, res) => {
  try {
    const newArt = await Article.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        article: newArt
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  }
};

exports.updateArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    res.status(203).json({
      message: "success",
      result: {
        article
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

exports.deleteArticle = async (req, res) => {
  try {
    await Article.findByIdAndRemove(req.params.id);
    res.status(204).json({
      status: "success",
      data: null
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  }
};

exports.options = (req, res) => {
  res.status(200).end();
};
