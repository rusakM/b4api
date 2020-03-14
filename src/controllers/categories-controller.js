const Category = require("../models/category-model");

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    const categoriesList = categories.map(item => item.name);
    res.status(200).json({
      status: "success",
      results: categories.length,
      data: {
        categoriesList
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

exports.addCategory = async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        category: newCategory
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  }
};

exports.changeNameCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name
      },
      {
        new: true
      }
    );

    res.status(203).json({
      status: "success",
      data: {
        category
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

exports.options = (req, res) => {
  res.status(200).end();
};
