const { sequelize } = require("./models");
const { DataTypes } = require("sequelize");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const usersRoute = require("./Routes/Users.js");

app.use("/", express.json());
app.use("/users", usersRoute);

sequelize
  .authenticate()
  .then(() => {
    app.listen(5050, () => {
      console.log("server started");
    });
  })
  .catch(() => {
    console.log("Connection to the database failed");
  });
