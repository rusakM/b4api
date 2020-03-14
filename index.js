const express = require("express");
const dotenv = require("dotenv");
const http = require("http");
const mongoose = require("mongoose");
const cors = require("cors");
const articlesRouter = require("./src/routers/articles-router");
const categoriesRouter = require("./src/routers/categories-router");
dotenv.config({ path: "./config.env" });

// env variables import
const port = process.env.PORT;

// 0 mongo connect
const { DATABASE } = process.env;
mongoose
  .connect(DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(con => {
    console.log("con estabilished");
  });

// 1 express config
const app = express();
app.use(express.json());
app.use(cors());

// 2 routes

app.use("/api/articles", articlesRouter());
app.use("/api/categories", categoriesRouter());

// 3 listening
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
