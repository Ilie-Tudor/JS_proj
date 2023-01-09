const express = require("express");
const { sequelize, User } = require("./models");
const { DataTypes } = require("sequelize");
const app = express();

app.get("/", (req, res) => {
  const gigel = User.build({
    user_id: "b208c5f0-86c4-4be5-9d4e-4eea37d2670a",
    user_name: "u1",
    email: "u1",
    password: "u1",
    display_name: "u1",
    address: "u1",
    postal_code: "u1",
  });
  gigel
    .save()
    .then(() => console.log("user created"))
    .catch((e) => console.error(e));
  res.send(gigel.user_name);
});

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
