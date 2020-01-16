const { MONGO_USER, MONGO_PASS, MONGO_DB } = require('../.env')
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

mongoose.connect(
  `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0-6ij0n.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

app.use(express.json());
app.use(routes);

app.listen(3333);
