const { Router } = require("express");
const uploadsRouter = require("../controllers/uploads-controller");

module.exports = () => {
  const app = Router();
  app.route("/:id").get(uploadsRouter.getImage);

  return app;
};
