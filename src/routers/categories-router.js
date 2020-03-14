const { Router } = require("express");
const categoriesController = require("./../controllers/categories-controller");

module.exports = () => {
  const app = Router();
  app
    .route("/")
    .get(categoriesController.getCategories)
    .post(categoriesController.addCategory);

  app
    .route("/:id")
    .patch(categoriesController.changeNameCategory)
    .options(categoriesController.options);

  return app;
};
