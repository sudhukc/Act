const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose
  .connect("mongodb://localhost:27017/newtest")
  .then((data) => {
    console.log("successfully connected");
  })
  .catch((err) => {
    if (err) {
      console.log(err);
    }
  });

app.listen(3001, () => {
  console.log("app running on 3001");
});
