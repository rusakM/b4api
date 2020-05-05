const { Router } = require("express");
const articlesConstroller = require("../controllers/articles-controller");

module.exports = () => {
  const app = Router();

  app
    .route("/")
    .get(articlesConstroller.getArticles)
    .post(articlesConstroller.addArticle);

  app.route("/comparison").get(articlesConstroller.comparison);

  app
    .route("/:id")
    .get(articlesConstroller.getArticle)
    .patch(articlesConstroller.updateArticle)
    .delete(articlesConstroller.deleteArticle)
    .options(articlesConstroller.options);

  app.route("/search").get(articlesConstroller.search);
  app.route("/search/:word").get(articlesConstroller.search);

  return app;
};
