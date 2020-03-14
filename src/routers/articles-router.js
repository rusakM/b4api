const { Router } = require("express");
const articlesConstroller = require("../controllers/articles-controller");

module.exports = () => {
  const app = Router();

  app
    .route("/")
    .get(articlesConstroller.getArticles)
    .post(articlesConstroller.addArticle);

  app
    .route("/:id")
    .get(articlesConstroller.getArticle)
    .patch(articlesConstroller.updateArticle)
    .delete(articlesConstroller.deleteArticle)
    .options(articlesConstroller.options);

  return app;
};
