const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const routes = require("./src/routes/index");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3001;

// app.get("/", (req, res) => {
//   res.send("hello world!");
// });

app.use(bodyParser.json());
routes(app);


mongoose.connect(`${process.env.MONGO_DB}`)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error: ", error);
  });
app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
