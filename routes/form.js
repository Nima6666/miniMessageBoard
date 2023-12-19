const express = require("express");
const message = require("../schema/message");

const submitRoute = express.Router();

submitRoute.post("/", async (req, res) => {
  await message
    .create({
      name: req.body.userName,
      message: req.body.userMessage,
    })
    .then(() => {
      res.redirect("/");
    });
});

module.exports = submitRoute;
